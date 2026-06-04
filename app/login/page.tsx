"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function LoginPage() {
  const supabase = createClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      router.push("/masterclassroom/dashboard");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <section className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/[0.04] p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
          Blue Horseshoe Foundation
        </p>

        <h1 className="mt-4 text-5xl font-black tracking-tight">
          Login
        </h1>

        <form onSubmit={handleLogin} className="mt-10 space-y-6">
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
            Login
          </button>
          <a
            href="/reset-password"
            className="mt-4 block text-center text-sm text-yellow-300 hover:text-yellow-200"
          >
            Forgot your password?
          </a>
        </form>
      </section>
    </main>
  );
}
