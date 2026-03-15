import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().min(9),
  eventType: z.string().optional().or(z.literal("")),
  date: z.string().optional().or(z.literal("")),
  message: z.string().optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
