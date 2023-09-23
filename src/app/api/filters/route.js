import categories from "@/my-components/nav/categories";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: categories }, { status: 200 });
}
