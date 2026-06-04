"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function SignupPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: "http://localhost:3000/auth/callback",
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Signup successful! Check your email.");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <section className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/[0.04] p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
          Blue Horseshoe Foundation
        </p>

        <h1 className="mt-4 text-5xl font-black tracking-tight">
          Create Account
        </h1>

        <form onSubmit={handleSignup} className="mt-10 space-y-6">
          <div>
            <label className="block text-sm font-bold">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-yellow-400 px-6 py-4 font-bold text-black transition hover:bg-yellow-300"
          >
            Create Account
          </button>
        </form>
      </section>
    </main>
  );
}
