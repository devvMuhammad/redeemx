import { Button } from "@/components/ui/button";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import ReviewsFilter from "./ReviewsFilter";
import categories from "../nav/categories";

function getFilters() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(categories);
    }, 2000);
  });
}

export default async function Filters({ titledCategory, asSheet }) {
  const categories = await getFilters();
  return (
    <div
      className={`${
        !asSheet && "hidden lg:block border-r border-gray-500"
      } px-3 space-y-8 overflow-y-auto `}
    >
      <PriceFilter />
      <BrandFilter titledCategory={titledCategory} categories={categories} />
      <ReviewsFilter />
      <Button className="font-bold tracking-wide">Apply Filters</Button>
    </div>
  );
}
