import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(5).nonempty("Name is required"),
    email: z.string().email().nonempty("Email is required"),
    password: z.string().min(5).nonempty("Password is required"),
    confirmPassword: z.string().min(5).nonempty("Password is required"),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    { message: "Passwords do not match", path: ["confirmPassword"] }
  );
