import { z } from "zod";

export const agentsInsertSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(120, { message: "Name is too long" }),
  instructions: z
    .string()
    .trim()
    .min(1, { message: "Instructions are required" })
    .max(1000, { message: "Instructions are too long" }),
});

export const agentsUpdateSchema = agentsInsertSchema.extend({
  id: z.string().uuid({ message: "ID must be a valid UUID" }),
});
