import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Build-time gegenereerde llms-full.txt: de vaste product-preamble plus de
// volledige inhoud van alle kennisbank-artikelen. Groeit automatisch mee
// met elke nieuwe batch artikelen (GEO: volledige tekst voor LLM-crawlers).

const NORM_LABELS: Record<string, string> = {
  'iso-27001': 'ISO 27001 (informatiebeveiliging)',
  'iso-9001': 'ISO 9001 (kwaliteitsmanagement)',
  'iso-14001': 'ISO 14001 (milieumanagement)',
  'iso-45001': 'ISO 45001 (gezond en veilig werken)',
  'algemeen': 'Algemene ISO-kennis',
};

const NORM_VOLGORDE = ['iso-27001', 'iso-9001', 'iso-14001', 'iso-45001', 'algemeen'];

export const GET: APIRoute = async () => {
  const preamble = readFileSync(resolve('src/data/llms-full-preamble.txt'), 'utf-8').trim();

  const artikelen = await getCollection('kennisbank', ({ data }) => !data.draft);

  const datum = (d: Date) => d.toISOString().slice(0, 10);

  const delen: string[] = [preamble, ''];
  delen.push('# ISO-kennisbank: volledig naslagwerk');
  delen.push('');
  delen.push(
    `> De publieke kennisbank op https://control-one.nl/kennis/ bevat ${artikelen.length} vrij toegankelijke Nederlandstalige artikelen over ISO-certificering: elke normclausule, alle 93 Annex A-maatregelen, begrippen, stappenplannen, veelgestelde vragen en vergelijkingen. Hieronder de volledige inhoud per norm.`
  );
  delen.push('');

  for (const norm of NORM_VOLGORDE) {
    const perNorm = artikelen
      .filter((a) => a.data.norm === norm)
      .sort((a, b) => a.data.title.localeCompare(b.data.title, 'nl'));
    if (perNorm.length === 0) continue;

    delen.push(`## ${NORM_LABELS[norm]}`);
    delen.push('');

    for (const artikel of perNorm) {
      const d = artikel.data;
      delen.push(`### ${d.title}`);
      delen.push('');
      delen.push(`URL: https://control-one.nl/kennis/${d.norm}/${artikel.slug}/`);
      delen.push(`Bijgewerkt: ${datum(d.updatedDate ?? d.publishDate)}`);
      delen.push('');
      delen.push(`Samenvatting: ${d.tldr}`);
      delen.push('');
      delen.push(artikel.body.trim());
      if (d.faq.length > 0) {
        delen.push('');
        delen.push('Veelgestelde vragen:');
        for (const f of d.faq) {
          delen.push(`- Vraag: ${f.vraag}`);
          delen.push(`  Antwoord: ${f.antwoord}`);
        }
      }
      delen.push('');
      delen.push('---');
      delen.push('');
    }
  }

  return new Response(delen.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
