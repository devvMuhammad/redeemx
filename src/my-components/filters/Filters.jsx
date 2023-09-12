import { Button } from "@/components/ui/button";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import ReviewsFilter from "./ReviewsFilter";

export default function Filters({ titledCategory, asSheet }) {
  return (
    <div
      className={`${
        !asSheet && "hidden lg:block border-r border-gray-500"
      } px-3 space-y-8 overflow-y-auto `}
    >
      <PriceFilter />
      <BrandFilter titledCategory={titledCategory} />
      <ReviewsFilter />
      <Button className="font-bold tracking-wide">Apply Filters</Button>
      {/* <SheetDemo titledCategory={titledCategory} /> */}
    </div>
  );
}
