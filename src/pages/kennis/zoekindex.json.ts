import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

const normLabels: Record<string, string> = {
  'iso-27001': 'ISO 27001',
  'iso-9001': 'ISO 9001',
  'iso-14001': 'ISO 14001',
  'iso-45001': 'ISO 45001',
  'algemeen': 'Algemeen',
};

export const GET: APIRoute = async () => {
  const artikelen = await getCollection('kennisbank', ({ data }) => !data.draft);
  const index = artikelen.map((a) => ({
    titel: a.data.title,
    beschrijving: a.data.description,
    url: `/kennis/${a.data.norm}/${a.slug}/`,
    norm: normLabels[a.data.norm],
    zoek: [a.data.title, a.data.description, ...a.data.keywords, a.data.norm.replace('-', ' ')].join(' ').toLowerCase(),
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
