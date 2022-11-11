import { z } from "zod";

export const schema = z.object({
  DATABASE_URL: z.string().url(),
  DEV_SUBDOMAIN: z.string(),
  NODE_ENV: z.enum(["development", "test", "production"]),
  PORT: z.string()
});
