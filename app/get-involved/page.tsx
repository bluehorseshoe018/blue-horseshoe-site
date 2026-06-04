export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
          Get Involved
        </p>

        <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">
          Help build a modern movement for education, wellness, and opportunity.
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {["Volunteer", "Partner", "Support"].map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.05] p-8">
              <h2 className="text-2xl font-bold">{item}</h2>
              <p className="mt-4 text-slate-300">
                Join Blue Horseshoe Foundation as we build community programs,
                masterclasses, and digital initiatives.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
