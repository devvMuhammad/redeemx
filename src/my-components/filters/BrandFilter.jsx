import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import categories from "../nav/categories";

function BrandFilter({ titledCategory }) {
  console.log(titledCategory, "in brand filter");
  return (
    <div className="space-y-2">
      <h1 className="font-bold text-left tracking-wide">Brand</h1>
      {/* CHECKBOXES */}
      {categories
        .find((cat) => cat.title === titledCategory)
        ?.menu.map((brand) => (
          <div className="flex items-center space-x-2 pl-4">
            <Checkbox id={brand} />
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

export default BrandFilter;