import { RestaurantType } from "@/enums/RestaurantTypeEnum";
import mongoose from "mongoose";

interface IRestaurant extends Document {
  name: string;
  address: string;
  ownerName: string;
  ownerEmail: string;
  type: RestaurantType;
}

const restaurantModel = new mongoose.Schema<IRestaurant>({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  ownerEmail: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const Restaurant =
  mongoose.models.Restaurant || mongoose.model("Restaurant", restaurantModel);

export default Restaurant;
