import { z } from "zod";

export const meetingsInsertSchema = z.object({
  agentId: z.string().uuid({ message: "Agent ID must be a valid UUID" }),
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(120, { message: "Name is too long" }),
});

export const meetingsUpdateSchema = meetingsInsertSchema.extend({
  id: z.string().uuid({ message: "ID must be a valid UUID" }),
});
