import React from "react";
import Grid2x2 from "../ui/Grid2x2";
import Grid3x3 from "../ui/Grid3x3";
import NumberSelect from "./NumberSelect";
import SortSelect from "./SortSelect";
import FiltersSheet from "./FiltersSheet";

function ProductsHeader() {
  return (
    <div className="flex justify-between items-center py-2 lg:px-2 border-b border-gray-500">
      <p className="hidden md:block text-lg">
        <strong>10</strong> of <strong>25</strong> Items
      </p>
      <div className="hidden md:flex gap-2 items-center">
        <Grid2x2 />
        <Grid3x3 />
      </div>
      <div className="flex gap-2">
        <NumberSelect />
        <SortSelect />
      </div>
      <FiltersSheet />
    </div>
  );
}

export default ProductsHeader;
