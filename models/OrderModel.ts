import mongoose from "mongoose";
import { OrderStatus } from "@/enums/OrderStatusEnum";

type Item = {
  name: string;
  quantity: number;
  price: number;
};

export interface IOrder extends Document {
  user: String;
  items: Item[];
  totalAmount: number;
  status: OrderStatus;
}

const orderModel = new mongoose.Schema<IOrder>({
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: Object.values(OrderStatus),
    default: OrderStatus.IN_CART,
  },
});
const Order =
  mongoose.models.Order || mongoose.model<IOrder>("Order", orderModel);

export default Order;
