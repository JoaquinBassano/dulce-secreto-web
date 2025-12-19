import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      price: z.number(),
      image: image(),
      order: z.number()
    })
});

export const collections = {
  products
};
