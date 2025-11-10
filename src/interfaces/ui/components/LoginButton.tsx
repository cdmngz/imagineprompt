// src/interfaces/ui/components/LoginButton.tsx
"use client";
import { signInWithGoogle } from "@/interfaces/ui/lib/auth-client";

export default function LoginButton() {
  return (
    <button onClick={() => signInWithGoogle({ redirectTo: "/" })}>
      Login with Google
    </button>
  );
}
