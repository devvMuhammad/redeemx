import Product from "@/lib/productsSchema";
import ProductsFooter from "./ProductsFooter";
import ProductsHeader from "./ProductsHeader";
import ProductsMain from "./ProductsMain";
import { connectDB } from "@/lib/connectDB";
// import { Suspense } from "react";
// import MainProductsSkeleton from "../ui/MainProductsSkeleton";

async function getProducts({ brand }) {
  // brand = Apple.Dell.HP
  connectDB();

  const brandFilter = brand
    ? { brand: { $in: brand.split(".") || [brand] } }
    : {};
  // const brandFilter = brand?.split(".") || [brand];
  let query = Product.find(brandFilter);

  // const products = await Product.find(brandFilter).lean();
  const products = await query.lean();
  // console.log(products);

  return products;
}

export default async function Products({ searchParams }) {
  const { grid = 4, brand } = searchParams;
  const products = JSON.parse(JSON.stringify(await getProducts({ brand })));

  return (
    <div className="flex flex-col bg-sy-500">
      <ProductsHeader products={products} />
      {/* <Suspense key={brand} fallback={<MainProductsSkeleton />}> */}
      <ProductsMain key={brand} grid={grid} products={products} />
      {/* </Suspense> */}
      <ProductsFooter />
    </div>
  );
}
