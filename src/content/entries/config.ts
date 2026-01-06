import { defineCollection, z } from 'astro:content';

const entries = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    cover: z.string(),
    video: z.string().optional(),
    description: z.string(),
  }),
});

export const collections = {
  entries,
};