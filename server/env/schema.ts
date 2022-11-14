import { z } from "zod";

export const schema = z.object({
  DATABASE_URL: z.string().url(),
  DEV_SUBDOMAIN: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  HOST_URL: z.string(),
  NODE_ENV: z.enum(["development", "test", "production"]),
  PORT: z.string(),
  SESSION_SALT: z.string(),
  SESSION_SECRET: z.string()
});
