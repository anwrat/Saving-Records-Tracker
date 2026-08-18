import { z } from "zod";

export const memberSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),

  email: z.string().email("Invalid email address").or(z.literal("")),

  armyNo: z.string().min(1, "Army number is required"),

  phone: z.string().min(7, "Phone number is too short"),

  address: z.string().min(1, "Address is required"),
});

export type MemberFormData = z.infer<typeof memberSchema>;
