import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { data: student, error: studentError } = await supabaseAdmin
    .from("students")
    .select("id")
    .eq("auth_user_id", user.id)
    .single();

  let activeStudent = student;

if (studentError || !student) {
  const { data: newStudent, error: createStudentError } = await supabaseAdmin
    .from("students")
    .insert({
      full_name: user.email,
      email: user.email,
      auth_user_id: user.id,
    })
    .select("id")
    .single();

  if (createStudentError || !newStudent) {
    return NextResponse.json(
      { error: createStudentError?.message || "Could not create student record" },
      { status: 500 }
    );
  }

  activeStudent = newStudent;
}

  const { data: enrollments, error } = await supabaseAdmin
    .from("enrollments")
    .select(`
      id,
      enrolled_at,
      courses (
        id,
        title,
        description,
        category,
        lessons (
          id,
          progress (
            completed
          )
        )
      )
    `)
    .eq("student_id", activeStudent!.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const dashboardData =
    enrollments?.map((item: any) => {
      const lessons = item.courses.lessons || [];
      const totalLessons = lessons.length;
      const completedLessons = lessons.filter((lesson: any) =>
        lesson.progress?.some((p: any) => p.completed)
      ).length;

      return {
        ...item,
        totalLessons,
        completedLessons,
        progressPercent:
          totalLessons > 0
            ? Math.round((completedLessons / totalLessons) * 100)
            : 0,
      };
    }) || [];

  return NextResponse.json(dashboardData);
}
