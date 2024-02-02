import { NextResponse } from "next/server";
import { connectDB } from "../../../../db/connectDB";
import Product from "../../../../db/schema/productsSchema";

export async function POST(req) {
  const { searchString } = await req.json();
  console.log(searchString);
  connectDB();
  const products = await Product.find({
    $text: {
      $search: searchString,
      $caseSensitive: false,
    },
  }).lean();
  return NextResponse.json(products, { status: 200 });
}
