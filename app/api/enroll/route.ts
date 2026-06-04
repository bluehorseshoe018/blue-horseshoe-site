import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { course_id } = body;

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

  const { data, error } = await supabaseAdmin
    .from("enrollments")
    .insert([
      {
        student_id: student.id,
        course_id,
      },
    ])
    .select();

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({
        message: "Already enrolled",
        alreadyEnrolled: true,
      });
    }

    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
