export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
          Contact
        </p>

        <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">
          Connect with Blue Horseshoe Foundation.
        </h1>

        <p className="mt-8 text-lg leading-8 text-slate-300">
          We are building modern community-focused educational and wellness
          initiatives powered by technology, creativity, and opportunity.
        </p>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.05] p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold">General Inquiries</h2>
              <p className="mt-2 text-slate-300">
                info@bluehorseshoe.foundation
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold">Programs & Partnerships</h2>
              <p className="mt-2 text-slate-300">
                partnerships@bluehorseshoe.foundation
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold">Volunteer Opportunities</h2>
              <p className="mt-2 text-slate-300">
                volunteer@bluehorseshoe.foundation
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
