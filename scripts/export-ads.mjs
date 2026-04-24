// Export each .ad-banner[data-name] on /ads-preview as a PNG.
// Usage: node scripts/export-ads.mjs
// Assumes astro dev server is already running on http://localhost:4321.

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir, writeFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const outDir = path.join(projectRoot, 'public', 'ads-export');
const PORT = 4321;
const URL = `http://localhost:${PORT}/ads-preview`;

function startDevServer() {
  return new Promise((resolve, reject) => {
    const proc = spawn('npx', ['astro', 'dev', '--port', String(PORT)], {
      cwd: projectRoot,
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, NODE_ENV: 'development' },
    });
    let ready = false;
    const onData = (data) => {
      const s = data.toString();
      process.stdout.write(`[astro] ${s}`);
      if (!ready && /Local\s+http:\/\/localhost/i.test(s)) {
        ready = true;
        resolve(proc);
      }
    };
    proc.stdout.on('data', onData);
    proc.stderr.on('data', onData);
    proc.on('exit', (code) => {
      if (!ready) reject(new Error(`astro dev exited with ${code}`));
    });
    // Safety timeout
    setTimeout(() => {
      if (!ready) reject(new Error('astro dev did not report ready within 60s'));
    }, 60_000);
  });
}

async function waitForServer(url, timeoutMs = 30_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server not reachable: ${url}`);
}

async function main() {
  await mkdir(outDir, { recursive: true });

  console.log('Starting astro dev server…');
  const devServer = await startDevServer();

  try {
    await waitForServer(URL);
    console.log('Server ready, launching Chromium…');

    const browser = await chromium.launch();
    // Render at 1x = pixel-exact size Google Ads expects for uploaded display banners.
    // RDA images (≤5MB budget) and classic uploaded banners (≤150KB budget) both benefit.
    const context = await browser.newContext({
      deviceScaleFactor: 1,
      viewport: { width: 1440, height: 1400 },
    });
    const page = await context.newPage();

    page.on('console', (msg) => console.log(`[page:${msg.type()}]`, msg.text()));

    console.log(`Navigating to ${URL} …`);
    await page.goto(URL, { waitUntil: 'networkidle' });

    // Ensure fonts are ready
    await page.evaluate(() => document.fonts.ready);
    // Small settle delay
    await page.waitForTimeout(500);

    const banners = await page.$$('.ad-banner[data-name]');
    console.log(`Found ${banners.length} banners`);

    const results = [];
    for (const banner of banners) {
      const name = await banner.getAttribute('data-name');
      if (!name) continue;
      const box = await banner.boundingBox();
      if (!box) {
        console.warn(`Skip ${name}: no bounding box`);
        continue;
      }
      const file = path.join(outDir, `${name}.png`);
      await banner.scrollIntoViewIfNeeded();
      await page.waitForTimeout(150);
      await banner.screenshot({ path: file, omitBackground: false });
      const s = await stat(file);
      results.push({ name, px: `${Math.round(box.width)}×${Math.round(box.height)}`, kb: (s.size / 1024).toFixed(1) });
      console.log(`  ✓ ${name}.png  (${(s.size / 1024).toFixed(1)} KB)`);
    }

    await browser.close();

    // Write manifest
    const manifestPath = path.join(outDir, 'manifest.json');
    await writeFile(manifestPath, JSON.stringify(results, null, 2));
    console.log(`\nExported ${results.length} banners to ${outDir}`);
    console.log('\n== Size report ==');
    for (const r of results) {
      console.log(`  ${r.name.padEnd(48)} ${r.px.padEnd(12)} ${r.kb} KB`);
    }
  } finally {
    devServer.kill('SIGTERM');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
