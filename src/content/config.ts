import { defineCollection } from 'astro:content';

import { schema as componentSchema } from './data/schema';

const componentsCollection = defineCollection({
   type: 'data',
   schema: componentSchema
});

export const collections = {
   data: componentsCollection
};