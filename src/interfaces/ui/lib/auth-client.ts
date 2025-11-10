// src/interfaces/ui/lib/auth-client.ts
import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient();

export const { signInWithGoogle, signOut } = authClient;
