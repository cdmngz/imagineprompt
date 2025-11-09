// src/interfaces/ui/components/LoginButton.tsx
"use client";
import { signIn } from "next-auth/react";
export default function LoginButton() {
  return (
    <button onClick={() => signIn("cognito", { callbackUrl: "/" })}>
      Login
    </button>
  );
}
