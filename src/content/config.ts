import { defineCollection, z } from 'astro:content';

// Define schema for articles
const blogsCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: image(),
      alt: z.string().optional()
    }).optional(),
    tags: z.array(z.string()).optional()
  }),
});

export const collections = {
  'blogs': blogsCollection,
};