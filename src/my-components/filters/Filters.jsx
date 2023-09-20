import { Button } from "@/components/ui/button";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import ReviewsFilter from "./ReviewsFilter";
import categories from "../nav/categories";

async function getFilters() {
  const response = await fetch("http://localhost:3000/api/filters");
  return response.json();
}

export default async function Filters({ titledCategory, asSheet }) {
  const { data: categories } = await getFilters();
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
