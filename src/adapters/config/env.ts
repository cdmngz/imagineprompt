// src/adapters/config/env.ts

import { z } from "zod";

const schema = z.object({
  APP_URL: z.string().url(),
  BETTER_AUTH_SECRET: z.string().min(32),
  GOOGLE_CLIENT_ID: z.string().min(1),
  GOOGLE_CLIENT_SECRET: z.string().min(1),
});

export const env = schema.parse(process.env);
