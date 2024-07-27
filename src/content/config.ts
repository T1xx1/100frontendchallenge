import { defineCollection, z } from 'astro:content';

const componentsCollection = defineCollection({
   type: 'data',
   schema: z.object({
      title: z.string(),
      inspo: z.string()
   })
});

export const collections = {
   components: componentsCollection
};