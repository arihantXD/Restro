import mongoose from "mongoose";
import { Role } from "../enums/RoleEnum";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: Role;
}

const userModel = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

const User = mongoose.models.User || mongoose.model<IUser>("User", userModel);

export default User;
