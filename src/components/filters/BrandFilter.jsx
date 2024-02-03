"use client";

import useQueryParamUpdate from "@/hooks/useQueryParamUpdate";
import Checkbox from "../ui/CustomCheckbox";
import React, { useTransition } from "react";
import useCustomSearchParams from "@/hooks/useCustomSearchParams";

export default function BrandFilter({ titledCategory, brandsList }) {
  // console.log(brands);
  const { deleteSearchParams } = useQueryParamUpdate();
  const { brands } = useCustomSearchParams();
  const [isPending, startTransition] = useTransition();
  return (
    <div className="space-y-2">
      <h1 className="font-bold text-left tracking-wide">Brand</h1>
      {/* CHECKBOXES */}
      {brandsList?.map((brand, i) => (
        <div key={brand.name} className="flex items-center space-x-2 pl-4">
          <Checkbox
            id={brand.name}
            checked={brands.includes(brand.name)}
            queryName="brand"
            queryValue={brand.name}
            onClick={() =>
              startTransition(() => {
                deleteSearchParams("page");
              })
            }
            disabled={isPending}
          />
          <label
            htmlFor={brand.name}
            className="text-md leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {brand.name} ({brand.count})
          </label>
        </div>
      ))}
    </div>
  );
}
