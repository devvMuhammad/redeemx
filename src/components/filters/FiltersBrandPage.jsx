import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontalIcon } from "lucide-react";
import FiltersSkeleton from "../ui/FiltersSkeletion";
import PriceFilter from "./PriceFilter";
import ResetButton from "./ResetButton";
import ReviewsFilter from "./ReviewsFilter";
import { Suspense } from "react";

export default async function FiltersBrandPage() {
  // const { brands, maximumPrice } = await getFilters(category);
  return (
    <Sheet className="border-none">
      <SheetTrigger asChild>
        <SlidersHorizontalIcon className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="px-2 py-10">
        <Suspense fallback={<FiltersSkeleton />}>
          <div className=" px-3 space-y-4 overflow-y-auto">
            <PriceFilter maximumPrice={5000} />
            {/* <ReviewsFilter /> */}
            <ResetButton />
          </div>
        </Suspense>
      </SheetContent>
    </Sheet>
  );
}
