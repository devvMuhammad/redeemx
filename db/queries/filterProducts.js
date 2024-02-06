"use server";

import { connectDB } from "../connectDB";
import Product from "../schema/productsSchema";

export default async function filterProducts(searchString) {
  connectDB();
  const products = await Product.find({
    $text: {
      $search: searchString,
      $caseSensitive: false,
    },
  })
    .select({ _id: 0 })
    .lean();
  return products;
}
