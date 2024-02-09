"use server";
import { connectDB } from "../connectDB";
import { cache } from "react";

import Product from "../schema/productsSchema";

export const getFilters = cache(async (category) => {
  // "use server";
  connectDB();
  // data needed for filters: number of items of each category, maximum and minimum price
  // this is just how the result of aggregate pipeline, couldn't find any better solution
  const [
    {
      brands,
      max: [{ max }],
    },
  ] = await Product.aggregate([
    { $match: { category } },
    { $unwind: { path: "$products" } },
    {
      $replaceRoot: {
        newRoot: "$products",
      },
    },
    {
      $facet: {
        brands: [
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
        ],
        max: [
          {
            $group: {
              _id: null,
              max: { $max: "$price" },
            },
          },
        ],
      },
    },
  ]);
  // console.log(brands, max);
  return { brands, maximumPrice: max };
});
