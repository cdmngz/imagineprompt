// src/ports/auth.ts

export type SessionUser = {
  id: string;
  email: string;
  name?: string;
  image?: string;
};

export interface AuthPort {
  getSession(): Promise<SessionUser | null>;
  signInUrl(): string;
  signOutUrl(redirectTo: string): string;
}
