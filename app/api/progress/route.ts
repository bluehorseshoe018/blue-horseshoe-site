import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req: Request) {
  const body = await req.json();

  const { student_id, lesson_id } = body;

  const { data, error } = await supabaseAdmin
    .from("progress")
    .upsert(
      {
        student_id,
        lesson_id,
        completed: true,
        completed_at: new Date().toISOString(),
      },
      {
        onConflict: "student_id,lesson_id",
      }
    )
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
