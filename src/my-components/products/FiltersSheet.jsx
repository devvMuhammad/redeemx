"use client";
import { useParams } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontalIcon } from "lucide-react";
import Filters from "@/my-components/filters/Filters";
import { toTitleCase } from "@/lib/utils";

function FiltersSheet() {
  const { category } = useParams();
  const titledCategory = toTitleCase(category);
  return (
    <Sheet className="border-none">
      <SheetTrigger asChild className="lg:hidden">
        <SlidersHorizontalIcon className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="px-2 py-10">
        <Filters titledCategory={titledCategory} asSheet={true} />
      </SheetContent>
    </Sheet>
  );
}

export default FiltersSheet;
