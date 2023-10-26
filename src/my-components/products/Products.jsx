import Product from "../../../db/productsSchema";
import ProductsFooter from "./ProductsFooter";
import ProductsHeader from "./ProductsHeader";
import ProductsMain from "./ProductsMain";
import { connectDB } from "../../../db/connectDB";
// import { Suspense } from "react";
// import MainProductsSkeleton from "../ui/MainProductsSkeleton";

async function getProductsAgg({ brand, sort, perPage, page, price }) {
  // brand = Apple.Dell.HP
  connectDB();

  const brandFilter = brand && { brand: { $in: brand.split(".") || [brand] } };
  const priceFilter = price && {
    price: { $gte: +price.split("-")[0], $lte: +price.split("-")[1] },
  };
  const matchQuery =
    !brandFilter && !priceFilter ? {} : { ...priceFilter, ...brandFilter };
  const [sortField, value] = sort ? sort.split(".") : ["price", 1];
  const pageNumber = +page || 1;
  const perPageItems = +perPage || 10;

  let [{ products, total }] = await Product.aggregate([
    {
      $match: matchQuery,
    },
    {
      $facet: {
        products: [
          { $sort: { [sortField]: +value } },
          { $skip: perPageItems * (pageNumber - 1) },
          { $limit: perPageItems },
        ],
        total: [{ $count: "total" }],
        // extremes: {
        //   maxPrice: { $max: "$price" },
        //   minPrice: { $min: "price" },
        // },
      },
    },
    {
      $addFields: { total: { $arrayElemAt: ["$total.total", 0] } },
    },
  ]);

  return { products, total, length: products.length };
}

export default async function Products({ searchParams }) {
  const { grid = 4, brand, sort, perPage, page, price } = searchParams;

  const { products, total, length } = await getProductsAgg({
    brand,
    sort,
    page,
    perPage,
    price,
  });

  return (
    <div className="flex flex-col bg-sy-500">
      <ProductsHeader length={length} total={total} />
      <ProductsMain grid={grid} products={products} />
      <ProductsFooter total={total} />
    </div>
  );
}
