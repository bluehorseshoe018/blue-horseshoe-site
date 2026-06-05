"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Course = {
  id: number;
  title: string;
  description: string;
  category: string;
};

type Lesson = {
  id: number;
  title: string;
  content: string;
  lesson_order: number;
};

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.id;

  const [course, setCourse] = useState<Course | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [completedLessonIds, setCompletedLessonIds] = useState<number[]>([]);
  async function markComplete(lessonId: number) {
  const response = await fetch("/api/progress", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lesson_id: lessonId,
    }),
  });

  if (response.ok) {
  setCompletedLessonIds((prev) =>
  [...new Set([...prev, lessonId])]
);
} else {
  alert("Could not mark lesson complete.");
}
}
  useEffect(() => {
    async function loadCourse() {
      const response = await fetch(`/api/course/${courseId}`);
      const data = await response.json();

      setCourse(data.course);
      setLessons(data.lessons || []);
      setCompletedLessonIds(data.completedLessonIds || []);
    }

    loadCourse();
  }, [courseId]);
  const uniqueCompletedLessonIds = [
  ...new Set(completedLessonIds)
];

const completedCount = uniqueCompletedLessonIds.length;

const totalLessons = lessons.length;

const progressPercent =
  totalLessons > 0
    ? Math.round((completedCount / totalLessons) * 100)
    : 0;
  if (!course) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
        Loading course...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
          {course.category}
        </p>

        <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">
          {course.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {course.description}
        </p>
       <div className="mt-8 max-w-3xl">
       <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">
         {completedCount} of {totalLessons} lessons completed
        </p>

       <div className="mt-3 h-4 overflow-hidden rounded-full bg-white/10">
            <div
      className="h-full rounded-full bg-yellow-400 transition-all"
      style={{ width: `${progressPercent}%` }}
    />
  </div>

  <p className="mt-3 text-sm text-slate-400">
    {progressPercent}% complete
  </p>
</div>
       <div className="mt-14 grid gap-6">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
            >
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">
                Lesson {lesson.lesson_order}
              </p>

              <h2 className="mt-3 text-3xl font-black">{lesson.title}</h2>

              <p className="mt-4 leading-7 text-slate-300">
                {lesson.content}
              </p>

              <button
                onClick={() => markComplete(lesson.id)}
                disabled={completedLessonIds.includes(lesson.id)}
                className={`mt-6 rounded-2xl px-6 py-3 font-bold transition ${
                  completedLessonIds.includes(lesson.id)
                    ? "bg-green-500 text-white"
                    : "bg-yellow-400 text-black hover:bg-yellow-300"
                }`}
              >
                {completedLessonIds.includes(lesson.id) ? "Completed" : "Mark Complete"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
