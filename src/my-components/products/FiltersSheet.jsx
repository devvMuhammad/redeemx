"use client";
import { useParams } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontalIcon } from "lucide-react";
import { toTitleCase } from "@/lib/utils";
import FiltersClient from "@/my-components/filters/FiltersClient";

function FiltersSheet({ brands }) {
  const { category } = useParams();
  const titledCategory = toTitleCase(category);
  return (
    <Sheet className="border-none">
      <SheetTrigger asChild className="lg:hidden">
        <SlidersHorizontalIcon className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="px-2 py-10">
        <FiltersClient
          titledCategory={titledCategory}
          asSheet={true}
          brands={brands}
        />
      </SheetContent>
    </Sheet>
  );
}

export default FiltersSheet;
