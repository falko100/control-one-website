import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    category: z.string(),
    readTime: z.string(),
    author: z.string().default('Control One Redactie'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const kennisbank = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    norm: z.enum(['iso-27001', 'iso-9001', 'iso-14001', 'iso-45001', 'algemeen']),
    categorie: z.enum(['normeisen', 'stappenplannen', 'begrippen', 'vragen', 'vergelijkingen', 'sjablonen']),
    tldr: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readTime: z.string(),
    keywords: z.array(z.string()).default([]),
    gerelateerd: z.array(z.string()).default([]),
    faq: z.array(z.object({ vraag: z.string(), antwoord: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, kennisbank };
