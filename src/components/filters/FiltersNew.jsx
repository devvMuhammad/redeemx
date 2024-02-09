import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontalIcon } from "lucide-react";
import FiltersSkeleton from "../ui/FiltersSkeletion";
import { getFilters } from "../../../db/queries/getFilters";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import ResetButton from "./ResetButton";
import ReviewsFilter from "./ReviewsFilter";
import { Suspense } from "react";

async function FiltersNew({ category }) {
  const { brands, maximumPrice } = await getFilters(category);
  return (
    <Sheet className="border-none">
      <SheetTrigger asChild>
        <SlidersHorizontalIcon className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="px-2 py-10">
        <Suspense fallback={<FiltersSkeleton />}>
          <div className=" px-3 space-y-4 overflow-y-auto">
            <PriceFilter maximumPrice={maximumPrice} />
            <BrandFilter brandsList={brands} />
            <ReviewsFilter />
            <ResetButton />
          </div>
        </Suspense>
      </SheetContent>
    </Sheet>
  );
}

export default FiltersNew;
