"use client";

import useQueryParamUpdate from "@/lib/useQueryParamUpdate";
import Checkbox from "../ui/Checkbox";
import React from "react";

export default function BrandFilter({ titledCategory, categories }) {
  // console.log(categories);
  const { deleteSearchParams } = useQueryParamUpdate();
  return (
    <div className="space-y-2">
      <h1 className="font-bold text-left tracking-wide">Brand</h1>
      {/* CHECKBOXES */}
      {categories
        .find((cat) => cat.title === titledCategory)
        ?.menu.map((brand) => (
          <div key={brand} className="flex items-center space-x-2 pl-4">
            <Checkbox
              id={brand}
              queryName="brand"
              queryValue={brand}
              onClick={() => deleteSearchParams("page")}
            />
            <label
              htmlFor={brand}
              className="text-md leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {brand}
            </label>
          </div>
        ))}
    </div>
  );
}
