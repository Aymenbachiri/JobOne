import { z } from "zod";

export const jobSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  type: z.string().optional(),
  companyName: z.string().min(1, { message: "Company name is required" }),
  companyLogo: z.instanceof(File).optional(),
  location: z.string().optional(),
  applicationEmail: z.string().email().optional(),
  url: z.string().url().optional(),
  description: z.string().min(1, { message: "Description is required" }),
  salary: z.number().optional(),
});

export type JobFormData = z.infer<typeof jobSchema>;
