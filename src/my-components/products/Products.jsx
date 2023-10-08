import Product from "@/lib/productsSchema";
import ProductsFooter from "./ProductsFooter";
import ProductsHeader from "./ProductsHeader";
import ProductsMain from "./ProductsMain";
import { connectDB } from "@/lib/connectDB";
// import { Suspense } from "react";
// import MainProductsSkeleton from "../ui/MainProductsSkeleton";

async function getProductsAgg({ brand, sort, perPage, page }) {
  // brand = Apple.Dell.HP
  connectDB();

  const brandFilter = brand
    ? { brand: { $in: brand.split(".") || [brand] } }
    : {};
  const [sortField, value] = sort ? sort.split(".") : ["price", 1];
  const pageNumber = +page || 1;
  const perPageItems = +perPage || 10;

  let [{ products, total }] = await Product.aggregate([
    { $match: brandFilter },
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

  return { products, total, length: products.length };
}

// async function getProducts({ brand, sort, perPage, page }) {
//   // brand = Apple.Dell.HP
//   connectDB();

//   // FILTERING
//   const brandFilter = brand
//     ? { brand: { $in: brand.split(".") || [brand] } }
//     : {};
//   let query = Product.find(brandFilter);
//   // console.log(products);

//   // SORTING

//   const [sortField, value] = sort ? sort.split(".") : ["price", 1];
//   query = query.sort({ [sortField]: +value });

//   // PAGINATION
//   const pageNumber = +page || 1;
//   const perPageItems = +perPage || 10;
//   console.log(pageNumber, perPageItems);
//   query = query.skip(perPageItems * (pageNumber - 1)).limit(perPageItems);

//   const products = await query.lean();
//   console.log(products);
//   return { products, length: products.length, total: 10 };
// }

/*
- Brands Filter
- Reviews Filter (baad me)
- Sorting 
- Pagination
*/

export default async function Products({ searchParams }) {
  const { grid = 4, brand, sort, perPage, page } = searchParams;
  // const { products, total, length } = JSON.parse(
  //   JSON.stringify(await getProducts({ brand, sort, page, perPage }))
  // );

  const { products, total, length } = await getProductsAgg({
    brand,
    sort,
    page,
    perPage,
  });

  return (
    <div className="flex flex-col bg-sy-500">
      <ProductsHeader length={length} total={total} />
      {/* <Suspense key={brand} fallback={<MainProductsSkeleton />}> */}
      <ProductsMain grid={grid} products={products} />
      {/* </Suspense> */}
      <ProductsFooter total={total}/>
    </div>
  );
}
