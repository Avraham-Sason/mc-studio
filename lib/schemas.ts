import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
  eventType: z.string().min(1),
  date: z.string().optional(),
  message: z.string().min(10),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
