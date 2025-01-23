import { OrderStatus } from "@/enums/OrderStatusEnum";
import { z } from "zod";

export const orderSchema = z.object({
  user: z.string().min(3).nonempty("Name can not be empty"),
  items: z.array(
    z.object({
      name: z.string().nonempty(),
      quantity: z.number().min(1),
      price: z.number().min(10),
    })
  ),
  totalAmount: z.number(),
  status: z
    .enum(Object.values(OrderStatus) as [OrderStatus, ...OrderStatus[]])
    .default(OrderStatus.IN_CART),
});
