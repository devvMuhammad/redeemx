import { Button } from "@/components/ui/button";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import ReviewsFilter from "./ReviewsFilter";

export default function FiltersClient({ titledCategory, asSheet, categories }) {
  // const { data: categories } = await getFilters();
  return (
    <div
      className={`${
        !asSheet && "hidden lg:block"
      } px-3 space-y-8 overflow-y-auto `}
    >
      <PriceFilter />
      <BrandFilter titledCategory={titledCategory} categories={categories} />
      <ReviewsFilter />
      <Button className="font-bold tracking-wide">Apply Filters</Button>
    </div>
  );
}
