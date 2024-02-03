"use server";
import { connectDB } from "../connectDB";
import { cache } from "react";

import Product from "../schema/productsSchema";

export const getFilters = cache(async () => {
  "use server";
  // connectDB();
  // data needed for filters: number of items of each category, maximum and minimum price
  // const response = await fetch("http://localhost:3000/api/filters");
  const brands = await Product.aggregate([
    {
      $group: {
        _id: "$brand",
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        name: "$_id",
        count: 1,
      },
    },
    { $sort: { name: 1 } },
  ]);
  return brands;
});
