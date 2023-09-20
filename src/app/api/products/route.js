import { productData } from "@/my-components/featured/FeaturedData";
import { NextResponse } from "next/server";

export async function GET(req) {
  // setTimeout(() => {
  return NextResponse.json({ data: productData }, { status: 200 });
  // }, 1000);
}
