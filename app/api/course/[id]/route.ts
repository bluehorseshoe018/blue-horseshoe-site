import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const courseId = Number(params.id);

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
  const { data: progress } = await supabaseAdmin
  .from("progress")
  .select("lesson_id, completed")
  .eq("student_id", 1)
  .eq("completed", true);

  const completedLessonIds = progress?.map((item) => item.lesson_id) || [];


  return NextResponse.json({ course, lessons, completedLessonIds });
}
