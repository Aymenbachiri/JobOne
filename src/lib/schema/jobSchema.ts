import { z } from "zod";

export const jobSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  type: z.string().optional(),
  companyName: z.string().min(1, { message: "Company name is required" }),
  companyLogo: z
    .any()
    .optional()
    .refine((file) => file instanceof File, {
      message: "Company logo must be a file",
    }),
  location: z.string().optional(),
  applicationEmail: z.string().email().optional(),
  url: z.string().url().optional(),
  description: z.string().min(1, { message: "Description is required" }),
  salary: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: "Expected number, received a string",
  }),
});

export type JobFormData = z.infer<typeof jobSchema>;
