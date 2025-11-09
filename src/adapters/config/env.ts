// src/adapters/config/env.ts

import { z } from "zod";

const schema = z.object({
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(32),
  COGNITO_ISSUER: z.string().url(),
  COGNITO_CLIENT_ID: z.string().min(1),
  COGNITO_CLIENT_SECRET: z.string().min(1),
});

export const env = schema.parse(process.env);
