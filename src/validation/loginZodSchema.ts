import { z } from "zod";

export const loginZodSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .regex(/[A-Za-z]/, 'Password must contain at least one letter')
      .regex(/\d/, 'Password must contain at least one number'),
    remember: z.boolean().optional(),
  });
  
export type FormData = z.infer<typeof loginZodSchema>;