import { Category } from "@/enums/CategoryEnum";
import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(3).nonempty("Name can not be empty"),
  description: z.string().min(20).nonempty("Name can not be empty"),
  price: z.number().min(10),
  category: z
    .enum(Object.values(Category) as [Category, ...Category[]])
    .default(Category.Burger),
  image: z.string().url().nonempty(),
});
