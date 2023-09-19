import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import categories from "../nav/categories";

async function getCategories() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(categories);
    }, 3000);
  });
}

export default async function BrandFilter({ titledCategory }) {
  const categories = await getCategories();

  return (
    <div className="space-y-2">
      <h1 className="font-bold text-left tracking-wide">Brand</h1>
      {/* CHECKBOXES */}
      {categories
        .find((cat) => cat.title === titledCategory)
        ?.menu.map((brand) => (
          <div key={brand} className="flex items-center space-x-2 pl-4">
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
