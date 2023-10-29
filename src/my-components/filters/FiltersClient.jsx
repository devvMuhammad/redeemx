import { Button } from "@/components/ui/button";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import ReviewsFilter from "./ReviewsFilter";

export default function FiltersClient({ titledCategory, asSheet, brands }) {
  // const { data: brands } = await getFilters();
  return (
    <div
      className={`${
        !asSheet && "hidden lg:block"
      } px-3 space-y-4 overflow-y-auto `}
    >
      <PriceFilter />
      <BrandFilter titledCategory={titledCategory} brandsList={brands} />
      <ReviewsFilter />
    </div>
  );
}
