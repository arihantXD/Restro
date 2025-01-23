import { Role } from "@/enums/RoleEnum";
import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(3).nonempty("Name can not be empty"),
  email: z.string().email().nonempty("Name can not be empty"),
  password: z.string().min(5).nonempty("Name can not be empty"),
  role: z.enum(Object.values(Role) as [Role, ...Role[]]).default(Role.USER),
});
