import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email().nonempty("Email is required"),
  password: z.string().min(5).nonempty("Password is required"),
});
