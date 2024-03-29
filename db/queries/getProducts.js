import { connectDB } from "../connectDB";
import { cache } from "react";

import Product from "../schema/productsSchema";

export const getProducts = cache(
  async ({ category, brand, sort, perPage, page, price }) => {
    // brand = Apple.Dell.HP
    connectDB();
    console.log("This is the category", category);
    const brandFilter = brand && {
      brand: { $in: brand.split(".") || [brand] },
    };
    const priceFilter = price && {
      price: { $gte: +price.split("-")[0], $lte: +price.split("-")[1] },
    };
    const matchQuery =
      !brandFilter && !priceFilter ? {} : { ...priceFilter, ...brandFilter };
    const [sortField, value] = sort ? sort.split(".") : ["price", 1];
    const pageNumber = +page || 1;
    const perPageItems = +perPage || 10;

    // let [{ products, total }] = await Product.aggregate([
    let [{ products, total }] = await Product.aggregate([
      // {$match:},
      {
        $match: { category },
      },
      {
        $unwind: {
          path: "$products",
        },
      },
      {
        $replaceRoot: {
          newRoot: "$products",
        },
      },
      { $match: { ...matchQuery } }, // price and brand filter apply here
      {
        $facet: {
          products: [
            { $sort: { [sortField]: +value } },
            { $skip: perPageItems * (pageNumber - 1) },
            { $limit: perPageItems },
          ],
          total: [{ $count: "total" }],
        },
      },
      {
        $addFields: { total: { $arrayElemAt: ["$total.total", 0] } },
      },
    ]);
    console.log(total, products.length);
    return { products, total, length: products.length };
  }
);
