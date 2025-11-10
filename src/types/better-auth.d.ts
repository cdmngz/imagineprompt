declare module "better-auth" {
  export interface BetterAuthHandlers {
    GET: (request: Request) => Promise<Response>;
    POST: (request: Request) => Promise<Response>;
    [key: string]: (request: Request) => Promise<Response>;
  }

  export interface BetterAuthInstance {
    handlers: BetterAuthHandlers;
    auth: (...args: unknown[]) => Promise<unknown>;
    signIn: (provider: string, options?: Record<string, unknown>) => Promise<unknown>;
    signOut: (options?: Record<string, unknown>) => Promise<unknown>;
    signInWithGoogle?: (options?: Record<string, unknown>) => Promise<unknown>;
  }

  export interface BetterAuthConfig {
    secret: string;
    baseURL?: string;
    providers: unknown[];
  }

  export function betterAuth(config: BetterAuthConfig): BetterAuthInstance;
}

declare module "better-auth/providers/google" {
  export interface GoogleProviderConfig {
    clientId: string;
    clientSecret: string;
    redirectUri?: string;
    prompt?: string;
  }

  export function google(config: GoogleProviderConfig): unknown;
}

declare module "better-auth/client" {
  export interface BetterAuthClient {
    signIn: (provider: string, options?: Record<string, unknown>) => Promise<unknown>;
    signInWithGoogle: (options?: Record<string, unknown>) => Promise<unknown>;
    signOut: (options?: Record<string, unknown>) => Promise<unknown>;
  }

  export function createAuthClient(): BetterAuthClient;
}
