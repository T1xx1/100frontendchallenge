import { z } from 'astro:content';

export type Type = {
   title: string;
   inspo: string;
};

export const schema = z.object({
   title: z.string(),
   inspo: z.string()
});