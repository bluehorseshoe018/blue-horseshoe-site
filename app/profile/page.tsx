"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function ProfilePage() {
  const supabase = createClient();

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    }

    loadUser();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <section className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
          Blue Horseshoe Foundation
        </p>

        <h1 className="mt-4 text-5xl font-black tracking-tight">
          My Profile
        </h1>

        <div className="mt-10 space-y-4">
          <p>
            <strong>Email:</strong> {user?.email}
          </p>

          <p>
            <strong>User ID:</strong> {user?.id}
          </p>

          <p>
            <strong>Created:</strong>{" "}
            {user?.created_at
              ? new Date(user.created_at).toLocaleDateString()
              : ""}
          </p>
        </div>
      </section>
    </main>
  );
}
