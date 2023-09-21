import Product from "@/lib/productsSchema";
import mongoose from "mongoose";
// import { productData } from "@/my-components/featured/FeaturedData";
import { NextResponse } from "next/server";

export async function GET(req) {
  console.log(process.env.DB_PASSWORD);
  const requestURL = `mongodb+srv://muhammadaljoufi:${process.env.DB_PASSWORD}@cluster0.fhnovob.mongodb.net/app`;
  await mongoose.connect(requestURL);
  let products = await Product.find({}).lean();

  return NextResponse.json({ data: products }, { status: 200 });
}
