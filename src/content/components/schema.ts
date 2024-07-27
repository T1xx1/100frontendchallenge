import { z } from 'astro:content';

export type Component = {
   title: string;
   inspo: string;
};

export const schema = z.object({
   title: z.string(),
   inspo: z.string()
});