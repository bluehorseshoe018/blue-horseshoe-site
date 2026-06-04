"use client";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
          Blue Horseshoe Foundation
        </p>

        <h1 className="mt-4 text-5xl font-black tracking-tight">
          Admin Dashboard
        </h1>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-sm uppercase text-yellow-300">
              Total Students
            </h2>

            <p className="mt-4 text-5xl font-black">
              --
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-sm uppercase text-yellow-300">
              Total Courses
            </h2>

            <p className="mt-4 text-5xl font-black">
              --
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-sm uppercase text-yellow-300">
              Enrollments
            </h2>

            <p className="mt-4 text-5xl font-black">
              --
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-sm uppercase text-yellow-300">
              Completion Rate
            </h2>

            <p className="mt-4 text-5xl font-black">
              --
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
