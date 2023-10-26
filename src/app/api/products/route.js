import Product from "../../../../db/productsSchema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req) {
  const requestURL = `mongodb+srv://muhammadaljoufi:${process.env.DB_PASSWORD}@cluster0.fhnovob.mongodb.net/app`;
  await mongoose.connect(requestURL);
  let products = await Product.find({}).lean();

  return NextResponse.json({ data: products }, { status: 200 });
}
