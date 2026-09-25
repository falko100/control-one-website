// ── Echte pixelmaat van een afbeelding in public/ ──
//
// Een img zonder width en height laat de browser geen ruimte reserveren, dus
// springt de pagina tijdens het laden. Staan er wél maten in maar kloppen ze
// niet met het bestand, dan reserveert de browser de verkeerde ruimte en
// springt het alsnog.
//
// Getallen met de hand bijhouden gaat mis zodra een screenshot opnieuw wordt
// bijgesneden. Daarom lezen we de maat tijdens de build uit het bestand zelf.
// Alleen de header wordt gelezen, niet de hele afbeelding.

import fs from 'node:fs';
import path from 'node:path';

type Maat = { width: number; height: number };

const cache = new Map<string, Maat | null>();

/** PNG: de IHDR staat direct na de signature van 8 bytes. */
function leesPng(buf: Buffer): Maat | null {
  if (buf.length < 24) return null;
  if (buf.toString('ascii', 12, 16) !== 'IHDR') return null;

  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

/** JPEG: doorloop de segmenten tot een SOF-marker, daar staan de maten in. */
function leesJpeg(buf: Buffer): Maat | null {
  let i = 2;

  while (i + 9 < buf.length) {
    if (buf[i] !== 0xff) {
      i++;
      continue;
    }

    const marker = buf[i + 1];
    const isSof = marker >= 0xc0 && marker <= 0xcf
      && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;

    if (isSof) {
      return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
    }

    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      i += 2;
      continue;
    }

    i += 2 + buf.readUInt16BE(i + 2);
  }

  return null;
}

/**
 * Geeft { width, height } van een bestand in public/, klaar om op een img te
 * spreiden. Komt het bestand er niet uit, dan geeft het niets terug en gedraagt
 * de img zich zoals voorheen.
 */
export function maat(bronpad: string): Maat | Record<string, never> {
  if (cache.has(bronpad)) return cache.get(bronpad) ?? {};

  let gevonden: Maat | null = null;

  try {
    const bestand = path.join(process.cwd(), 'public', bronpad.replace(/^\//, ''));
    // De eerste kilobytes bevatten de header van zowel PNG als JPEG.
    const fd = fs.openSync(bestand, 'r');
    const buf = Buffer.alloc(65536);
    const gelezen = fs.readSync(fd, buf, 0, buf.length, 0);
    fs.closeSync(fd);

    const kop = buf.subarray(0, gelezen);
    gevonden = kop[0] === 0x89 && kop[1] === 0x50 ? leesPng(kop) : leesJpeg(kop);
  } catch {
    gevonden = null;
  }

  cache.set(bronpad, gevonden);

  return gevonden ?? {};
}
