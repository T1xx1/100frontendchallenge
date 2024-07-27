import { defineCollection } from 'astro:content';

import { schema as componentSchema } from './components/schema';

const componentsCollection = defineCollection({
   type: 'data',
   schema: componentSchema
});

export const collections = {
   components: componentsCollection
};