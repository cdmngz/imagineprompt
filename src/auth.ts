import { betterAuthInstance } from "@/adapters/auth/better-auth";

const { handlers, auth, signIn, signOut } = betterAuthInstance as unknown as {
  handlers: Record<string, unknown>;
  auth: (...args: unknown[]) => Promise<unknown>;
  signIn: (provider: string, options?: Record<string, unknown>) => Promise<unknown>;
  signOut: (options?: Record<string, unknown>) => Promise<unknown>;
  signInWithGoogle?: (options?: Record<string, unknown>) => Promise<unknown>;
};

export { handlers, auth, signIn, signOut };

export const signInWithGoogle =
  (betterAuthInstance as { signInWithGoogle?: typeof signIn }).signInWithGoogle ??
  ((options?: Record<string, unknown>) => signIn("google", options));
