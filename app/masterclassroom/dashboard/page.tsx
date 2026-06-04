"use client";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

type Enrollment = {
  id: number;
  totalLessons: number;
  completedLessons: number;
  progressPercent: number;
  enrolled_at: string;
  courses: {
    id: number;
    title: string;
    description: string;
    category: string;
  };
};

export default function DashboardPage() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const supabase = createClient();
  const router = useRouter();
  async function logout() {
    await fetch("/api/logout", {
      method: "POST",
    });

    router.push("/login");
  }
  useEffect(() => {
    async function loadDashboard() {
      const response = await fetch("/api/dashboard");
      const data = await response.json();
      setEnrollments(data);
    }
    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      loadDashboard();
}

    checkUser();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
          Student Dashboard
        </p>

        <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">
          My Masterclasses
        </h1>
        <button
          onClick={logout}
          className="mt-6 rounded-2xl bg-red-500 px-6 py-3 font-bold text-white hover:bg-red-600"
        >
          Logout
        </button>
        <a
          href="/masterclassroom"
          className="ml-3 mt-6 inline-block rounded-2xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
        >
          Browse Masterclasses
        </a>
        {enrollments.length === 0 && (
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-3xl font-black">No masterclasses yet</h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
      You are not enrolled in any masterclasses yet. Browse available courses
      and choose one to begin your learning journey.
            </p>

            <a
              href="/masterclassroom"
              className="mt-6 inline-block rounded-2xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
            >
              Browse Masterclasses
            </a>
          </div>
        )}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {enrollments.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-300">
                {item.courses.category}
              </p>

              <h2 className="mt-3 text-3xl font-black">
                {item.courses.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                {item.courses.description}
              </p>

              <p className="mt-6 text-sm text-slate-400">
                Enrolled: {new Date(item.enrolled_at).toLocaleDateString()}
              </p>

              <div className="mt-6">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">
                  {item.completedLessons} of {item.totalLessons} lessons completed
                </p>

                <div className="mt-3 h-4 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-yellow-400"
                    style={{ width: `${item.progressPercent}%` }}
                  />
                </div>

                <p className="mt-3 text-sm text-slate-400">
                  {item.progressPercent}% complete
                </p>
                <a
                  href={`/masterclassroom/course/${item.courses.id}`}
                  className="mt-6 inline-block rounded-2xl bg-yellow-400 px-6 py-3 font-bold text-black hover:bg-yellow-300"
                >
                  Start Learning
                </a>

              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
