"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Course = {
  id: number;
  title: string;
  description: string;
  category: string;
};

export default function CourseList() {
  const [courses, setCourses] = useState<Course[]>([]);
  const enrollStudent = async (courseId: number, courseTitle: string) => {
  const response = await fetch("/api/enroll", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        course_id: courseId,
    }),
  });

  const data = await response.json();

  if (data.alreadyEnrolled) {
  alert(`You are already enrolled in ${courseTitle}`);
} else if (response.ok) {
  alert(`Successfully enrolled in ${courseTitle}`);
  console.log(data);
} else {
  alert("Enrollment failed");
  console.error(data);
}

};
  useEffect(() => {
    async function fetchCourses() {
      const response = await fetch("/api/courses");
      const data = await response.json();
      setCourses(data);
    }

    fetchCourses();
  }, []);

  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-7xl">
  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
    Masterclassroom
  </p>

  <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
    Live Courses
  </h2>

  <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/10"
          >
            <div className="mb-4 inline-block rounded-full bg-yellow-400/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-yellow-300">
              {course.category}
            </div>

            <h2 className="text-3xl font-black text-white">
              {course.title}
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              {course.description}
            </p>

            <button
              onClick={() => enrollStudent(course.id, course.title)}
              className="mt-8 rounded-2xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>
     </div>
    </section>
  );
}
