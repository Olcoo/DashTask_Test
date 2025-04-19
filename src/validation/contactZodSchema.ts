import { z } from "zod";

export const contactZodSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name is too long"),
    
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name is too long"),

  email: z
    .string()
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .regex(/^\+?[0-9]{10,15}$/, "Please enter a valid phone number"),

  birthDate: z
    .coerce.date()
    .refine(date => date <= new Date(), {
      message: "Birth date cannot be in the future",
    })
    .refine(date => date.getFullYear() >= 1900, {
      message: "Birth year must be after 1900",
    }),

  gender: z.enum(["Male", "Female"], {
    errorMap: () => ({ message: "Gender is required" }),
  }),

  image: z
    .any()
    .optional()
    .refine(
      (file) => {
        if (!file) return true;
        return file instanceof File;
      },
      { message: "Invalid file" }
    )
    .refine(
      (file) => {
        if (!file) return true;
        return ["image/jpeg", "image/png"].includes(file.type);
      },
      { message: "Only JPG or PNG files are allowed" }
    )
    .refine(
      (file) => {
        if (!file) return true;
        return file.size <= 5 * 1024 * 1024;
      },
      { message: "Image must be less than 5MB" }
    ),
});


export type ContactFormData = z.infer<typeof contactZodSchema>;
