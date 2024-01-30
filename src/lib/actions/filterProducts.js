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
  }).lean();
  return products;
}
