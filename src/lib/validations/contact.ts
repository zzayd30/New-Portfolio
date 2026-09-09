import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80, "Name is too long."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email address is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Please provide a little more detail.")
    .max(2000, "Message must be 2,000 characters or fewer."),
  website: z.string().max(0),
});
