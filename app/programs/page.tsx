export default function ProgramsPage() {
  const programs = [
    {
      title: "Digital Confidence",
      description:
        "A beginner-friendly masterclass that helps participants use modern technology with less fear and more independence.",
    },
    {
      title: "Online Safety & Awareness",
      description:
        "Practical guidance on passwords, scams, phishing, safe browsing, privacy, and protecting families online.",
    },
    {
      title: "Digital Entrepreneurship",
      description:
        "Workshops that introduce participants to branding, side hustles, online business basics, and turning ideas into action.",
    },
    {
      title: "Financial Literacy",
      description:
        "Simple, practical lessons on budgeting, credit, banking, saving, and building stronger financial habits.",
    },
    {
      title: "Community Wellness",
      description:
        "Supportive workshops focused on confidence, discipline, self-development, wellness, and positive community growth.",
    },
    {
      title: "Youth Technology Labs",
      description:
        "Creative, beginner-friendly activities that introduce young people to technology, media, digital tools, and problem-solving.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
          Programs & Masterclasses
        </p>

        <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">
          Practical programs designed to build skills, confidence, and opportunity.
        </h1>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-8"
            >
              <h2 className="text-2xl font-bold">{program.title}</h2>

              <p className="mt-4 leading-7 text-slate-300">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
