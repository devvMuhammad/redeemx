"use client";
import { useParams } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontalIcon } from "lucide-react";
import { toTitleCase } from "@/lib/utils";
import PriceFilter from "./PriceFilter";
import BrandFilter from "./BrandFilter";
import ReviewsFilter from "./ReviewsFilter";
import ResetButton from "./ResetButton";
import { useEffect, useState, useTransition } from "react";
import { getFilters } from "../../../db/gets/getFilters";
import FiltersSkeleton from "../ui/FiltersSkeletion";

function FiltersNew() {
  // brands will be called here, my friend
  const [brands, setBrands] = useState([]);
  const { category } = useParams();
  const titledCategory = toTitleCase(category);
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    startTransition(() => {
      getFilters()
        .then((brands) => setBrands(brands))
        .catch((err) => console.error(err));
    });
  }, []);
  return (
    <Sheet className="border-none">
      <SheetTrigger asChild>
        <SlidersHorizontalIcon className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="px-2 py-10">
        {isPending ? (
          <FiltersSkeleton />
        ) : (
          <FiltersSheetContent
            titledCategory={titledCategory}
            brands={brands}
          />
        )}
      </SheetContent>
    </Sheet>
  );
}

function FiltersSheetContent({ titledCategory, asSheet = true, brands }) {
  return (
    <div
      className={`${
        !asSheet && "hidden lg:block"
      } px-3 space-y-4 overflow-y-auto `}
    >
      <PriceFilter />
      <BrandFilter titledCategory={titledCategory} brandsList={brands} />
      <ReviewsFilter />
      <ResetButton />
    </div>
  );
}

export default FiltersNew;
