import CourseList from "@/components/courses/CourseList";

export default function MasterclassroomPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
            Blue Horseshoe Masterclassroom
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">
            Learn online. Build confidence. Create opportunity.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Explore virtual masterclasses designed for digital confidence,
            online safety, entrepreneurship, financial literacy, wellness, and
            youth technology learning.
          </p>
        </div>
      </section>

      <CourseList />
    </main>
  );
}
