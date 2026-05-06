import { z } from "zod";

export const DiscoverySchema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().min(1).max(120),
  timeline: z.string().trim().min(1).max(60),
  productIdea: z.string().trim().min(10).max(4000),
  website: z.string().max(0).optional().default(""),
});

export const LegacySchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email(),
  phone: z.string().trim().min(5).max(40),
  subject: z.string().trim().min(1).max(160),
  message: z.string().trim().min(10).max(4000),
  website: z.string().max(0).optional().default(""),
});

export type DiscoveryPayload = z.infer<typeof DiscoverySchema>;
export type LegacyPayload = z.infer<typeof LegacySchema>;
