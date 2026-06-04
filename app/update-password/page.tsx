"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function UpdatePasswordPage() {
  const supabase = createClient();
  const router = useRouter();

  const [password, setPassword] = useState("");

  async function handleUpdatePassword(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Password updated successfully.");
      router.push("/login");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <section className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/[0.04] p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
          Blue Horseshoe Foundation
        </p>

        <h1 className="mt-4 text-5xl font-black tracking-tight">
          Update Password
        </h1>

        <form onSubmit={handleUpdatePassword} className="mt-10 space-y-6">
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white"
            required
          />

          <button
            type="submit"
            className="w-full rounded-2xl bg-yellow-400 px-6 py-4 font-bold text-black hover:bg-yellow-300"
          >
            Update Password
          </button>
        </form>
      </section>
    </main>
  );
}
