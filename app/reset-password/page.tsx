"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function ResetPasswordPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:3000/update-password",
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Password reset email sent.");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <section className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/[0.04] p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
          Blue Horseshoe Foundation
        </p>

        <h1 className="mt-4 text-5xl font-black tracking-tight">
          Reset Password
        </h1>

        <form onSubmit={handleReset} className="mt-10 space-y-6">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white"
            required
          />

          <button
            type="submit"
            className="w-full rounded-2xl bg-yellow-400 px-6 py-4 font-bold text-black hover:bg-yellow-300"
          >
            Send Reset Link
          </button>
        </form>
      </section>
    </main>
  );
}
