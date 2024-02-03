"use server";

import { connectDB } from "../../../db/connectDB";
import Product from "../../../db/schema/productsSchema";

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
