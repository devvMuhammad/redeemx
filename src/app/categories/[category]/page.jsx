import { toCamelCase, toTitleCase } from "@/lib/utils";
import FiltersServer from "@/my-components/filters/FiltersServer";
import categories from "@/my-components/nav/categories";
import Products from "@/my-components/products/Products";
import FiltersSkeleton from "@/my-components/ui/FiltersSkeletion";
import ProductsSkeleton from "@/my-components/ui/ProductsSkeletion";
import { Suspense } from "react";

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: toCamelCase(category.title),
  }));
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

      <Suspense
        key={[searchParams.brand, searchParams.sort]}
        fallback={<ProductsSkeleton />}
      >
        <Products searchParams={searchParams} />
      </Suspense>
    </>
  );
}
