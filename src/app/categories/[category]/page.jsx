import { toCamelCase, toTitleCase } from "@/lib/utils";
import { productData } from "@/my-components/featured/FeaturedData";
import Filters from "@/my-components/filters/Filters";
import categories from "@/my-components/nav/categories";
import ProductsFooter from "@/my-components/products/ProductsFooter";
import ProductsHeader from "@/my-components/products/ProductsHeader";
import ProductsMain from "@/my-components/products/ProductsMain";
import FiltersSkeleton from "@/my-components/ui/FiltersSkeletion";
import ProductsSkeleton from "@/my-components/ui/ProductsSkeletion";
import { Suspense } from "react";

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: toCamelCase(category.title),
  }));
}

export default async function Category({
  params: { category },
  searchParams: { grid },
}) {
  const titledCategory = toTitleCase(category);
  // const categories = await getCategories();
  return (
    <>
      {/* FILTERS */}
      <Suspense fallback={<FiltersSkeleton />}>
        <Filters
          // categories={categories}
          titledCategory={titledCategory}
          asSheet={false}
        />
      </Suspense>

      {/* PRODUCTS */}
      <Suspense fallback={<ProductsSkeleton />}>
        <div className="flex flex-col bg-sy-500">
          <ProductsHeader />
          <ProductsMain grid={grid} />
          <ProductsFooter />
        </div>
      </Suspense>
    </>
  );
}
