import { toCamelCase, toTitleCase } from "@/lib/utils";
import { productData } from "@/my-components/featured/FeaturedData";
import Filters from "@/my-components/filters/FiltersClient";
import FiltersServer from "@/my-components/filters/FiltersServer";
import categories from "@/my-components/nav/categories";
import Products from "@/my-components/products/Products";
import ProductsFooter from "@/my-components/products/ProductsFooter";
import ProductsHeader from "@/my-components/products/ProductsHeader";
import ProductsMain from "@/my-components/products/ProductsMain";
import FiltersSkeleton from "@/my-components/ui/FiltersSkeletion";
import MainProductsSkeleton from "@/my-components/ui/MainProductsSkeleton";
import ProductsSkeleton from "@/my-components/ui/ProductsSkeletion";
import { Suspense } from "react";

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: toCamelCase(category.title),
  }));
}

function SuspensedProducts({ brand, searchParams }) {
  <Suspense key={brand} fallback={<ProductsSkeleton />}>
    <Products key={brand} searchParams={searchParams} />
  </Suspense>;
}

export default async function Category({ params: { category }, searchParams }) {
  const titledCategory = toTitleCase(category);
  // const categories = await getCategories();
  return (
    <>
      {/* FILTERS */}
      <Suspense fallback={<FiltersSkeleton />}>
        <FiltersServer titledCategory={titledCategory} />
      </Suspense>

      {/* PRODUCTS */}

      <Suspense key={searchParams.brand} fallback={<ProductsSkeleton />}>
        <Products searchParams={searchParams} />
      </Suspense>
    </>
  );
}
