import { defineCollection, z } from 'astro:content';

/* Components */
export type Component = {
   title: string;
   inspo: string;
   article: string;
};

const componentsCollection = defineCollection({
   type: 'data',
   schema: z.object({
      title: z.string(),
      inspo: z.string(),
      article: z.string(),
   })
});

export const collections = {
   data: componentsCollection
};