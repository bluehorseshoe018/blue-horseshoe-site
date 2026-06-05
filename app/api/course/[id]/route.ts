import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { createClient } from "@/utils/supabase/server";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const courseId = Number(params.id);

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

  if (studentError || !student) {
    return NextResponse.json(
      { error: "Student record not found" },
      { status: 404 }
    );
  }

  const { data: course, error: courseError } = await supabaseAdmin
    .from("courses")
    .select("*")
    .eq("id", courseId)
    .single();

  if (courseError) {
    return NextResponse.json({ error: courseError.message }, { status: 500 });
  }

  const { data: lessons, error: lessonsError } = await supabaseAdmin
    .from("lessons")
    .select("*")
    .eq("course_id", courseId)
    .order("lesson_order", { ascending: true });

  if (lessonsError) {
    return NextResponse.json({ error: lessonsError.message }, { status: 500 });
  }

  const lessonIds = (lessons || []).map((lesson) => lesson.id);

  const { data: progress, error: progressError } = await supabaseAdmin
    .from("progress")
    .select("lesson_id")
    .eq("student_id", student.id)
    .eq("completed", true)
    .in("lesson_id", lessonIds);

  if (progressError) {
    return NextResponse.json({ error: progressError.message }, { status: 500 });
  }

  const completedLessonIds = [
    ...new Set((progress || []).map((item) => item.lesson_id)),
  ];

  return NextResponse.json({
    course,
    lessons,
    completedLessonIds,
  });
}
