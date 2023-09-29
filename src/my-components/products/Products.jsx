import Product from "@/lib/productsSchema";
import ProductsFooter from "./ProductsFooter-v1";
import ProductsHeader from "./ProductsHeader";
import ProductsMain from "./ProductsMain";
import { connectDB } from "@/lib/connectDB";
// import { Suspense } from "react";
// import MainProductsSkeleton from "../ui/MainProductsSkeleton";

async function getProducts({ brand, sort, perPage, page }) {
  // brand = Apple.Dell.HP
  connectDB();

  // FILTERING
  const brandFilter = brand
    ? { brand: { $in: brand.split(".") || [brand] } }
    : {};
  let query = Product.find(brandFilter);

  // console.log(products);

  // SORTING

  const [sortField, value] = sort ? sort.split(".") : ["price", 1];
  query = query.sort({ [sortField]: +value });

  // PAGINATION
  const pageNumber = page || 1;
  const perPageItems = perPage || 10;
  query = query.skip(perPage * pageNumber).limit(perPageItems);

  const products = await query.lean();
  return products;
}

/*
- Brands Filter
- Reviews Filter (baad me)
- Sorting 
- Pagination
*/

export default async function Products({ searchParams }) {
  const { grid = 4, brand, sort, perPage, page } = searchParams;
  const products = JSON.parse(
    JSON.stringify(await getProducts({ brand, sort, page, perPage }))
  );

  return (
    <div className="flex flex-col bg-sy-500">
      <ProductsHeader products={products} />
      {/* <Suspense key={brand} fallback={<MainProductsSkeleton />}> */}
      <ProductsMain grid={grid} products={products} />
      {/* </Suspense> */}
      <ProductsFooter />
    </div>
  );
}
