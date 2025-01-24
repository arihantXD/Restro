import { RestaurantType } from "@/enums/RestaurantTypeEnum";
import { z } from "zod";

export const restaurantSchema = z.object({
  name: z.string().min(3).nonempty("Name can not be empty"),
  ownerName: z.string().min(3).nonempty("Name can not be empty"),
  ownerEmail: z.string().email().nonempty("Name can not be empty"),
  address: z.string().min(5).nonempty("Name can not be empty"),
  type: z
    .enum(
      Object.values(RestaurantType) as [RestaurantType, ...RestaurantType[]]
    )
    .default(RestaurantType.CAFE),
});
