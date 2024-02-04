import FiltersSkeleton from "@/components/ui/FiltersSkeletion";
import ProductsSkeleton from "@/components/ui/ProductsSkeletion";

export default function Loading() {
  return (
    <>
      <FiltersSkeleton />
      <ProductsSkeleton />
    </>
  );
}
