// src/adapters/auth/better-auth.ts
import { betterAuth } from "better-auth";
import { google } from "better-auth/providers/google";
import { env } from "@/adapters/config/env";

export const betterAuthInstance = betterAuth({
  secret: env.BETTER_AUTH_SECRET,
  baseURL: env.APP_URL,
  providers: [
    google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
