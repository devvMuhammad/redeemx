import FiltersSkeleton from "@/my-components/ui/FiltersSkeletion";
import ProductsSkeleton from "@/my-components/ui/ProductsSkeletion";

export default function Loading() {
  return (
    <>
      <FiltersSkeleton />
      <ProductsSkeleton />
    </>
  );
}
