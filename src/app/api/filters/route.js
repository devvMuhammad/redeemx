import categories from "@/my-components/nav/categories";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  // console.log(process.env)
  // const requestURL = `mongodb+srv://muhammadaljoufi:${process.env.DB_PASSWORD}@cluster0.fhnovob.mongodb.net/`;
  // await mongoose.connect(requestURL);
  return NextResponse.json({ data: categories }, { status: 200 });
}
