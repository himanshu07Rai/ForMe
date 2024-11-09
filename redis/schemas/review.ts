import {z} from 'zod';

export const ReviewSchema = z.object({
  rating: z.number().int().min(1).max(5),
  review: z.string().min(2),
});

export type Review = z.infer<typeof ReviewSchema>;