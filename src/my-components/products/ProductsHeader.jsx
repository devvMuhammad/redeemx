import React from "react";

import NumberSelect from "./NumberSelect";
import SortSelect from "./SortSelect";
import FiltersSheet from "./FiltersSheet";

function ProductsHeader() {
  return (
    <div className="flex justify-between items-center py-2 lg:px-2 ">
      <p className="hidden md:block text-lg">
        Showing <strong>10</strong> of <strong>25</strong> Items
      </p>
      <div className="hidden md:flex gap-4 items-center">
        {/* <Grid2x2 />
        <Grid3x3 /> */}
        <div className="grid grid-cols-2 gap-1 group cursor-pointer">
          {Array.from({ length: 4 }).map(() => (
            <div className="w-2 h-2 rounded-full bg-white  group-hover:bg-gray-500 transition-all duration-200"></div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-1 group cursor-pointer">
          {Array.from({ length: 9 }).map(() => (
            <div className="w-[5.5px] h-[5.5px] rounded-full bg-white  group-hover:bg-gray-500 transition-all duration-200"></div>
          ))}
        </div>
        <div className="hidden lg:grid grid-cols-4 gap-1 group cursor-pointer">
          {Array.from({ length: 12 }).map(() => (
            <div className="w-[5px] h-[5px] rounded-full bg-white  group-hover:bg-gray-500  transition-all duration-200"></div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 items-center justify-between w-full md:w-auto">
        <div className="flex gap-2">
          <NumberSelect />
          <SortSelect />
        </div>
        <FiltersSheet />
      </div>
    </div>
  );
}

export default ProductsHeader;
