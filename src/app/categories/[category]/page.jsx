import { toCamelCase, toTitleCase } from "@/lib/utils";
import { productData } from "@/my-components/featured/FeaturedData";
import Filters from "@/my-components/filters/Filters";
import categories from "@/my-components/nav/categories";
import ProductsFooter from "@/my-components/products/ProductsFooter";
import ProductsHeader from "@/my-components/products/ProductsHeader";
import ProductsMain from "@/my-components/products/ProductsMain";

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: toCamelCase(category.title),
  }));
}

export default async function Category({
  params: { category },
  searchParams: { grid },
}) {
  const prom = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(productData);
      }, 5000);
    });
  };
  const products = await prom();
  const titledCategory = toTitleCase(category);
  return (
    <>
      {/* FILTERS */}
      <Filters titledCategory={titledCategory} asSheet={false} />

      {/* PRODUCTS */}
      <div className="flex flex-col bg-sy-500">
        <ProductsHeader />
        <ProductsMain grid={grid} products={products} />
        <ProductsFooter />
      </div>
    </>
  );
}
