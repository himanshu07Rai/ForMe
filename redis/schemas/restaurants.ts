import {z} from 'zod';

export const RestaurantSchema = z.object({
  name: z.string().min(2),
  address: z.string().min(2),
  cuisines: z.array(z.string().min(2)),
});

export const RestaurantsDetailsSchema = z.object({
    link: z.array(
        z.object({
            name: z.string().min(2),
            url: z.string().min(2),
        })
    ),
    contact: z.object({
        phone: z.string().min(10),
        email: z.string().email(),
    }),
});

export type Restaurant = z.infer<typeof RestaurantSchema>;
export type RestaurantDetails = z.infer<typeof RestaurantsDetailsSchema>;