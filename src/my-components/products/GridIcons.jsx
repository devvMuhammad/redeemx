"use client";

import useCustomSearchParams from "@/lib/useCustomSearchParams";
import useQueryParamUpdate from "@/lib/useQueryParamUpdate";

const gridArray = [
  { col: 2, gridCol: "grid-cols-2", length: 4, size: "w-2 h-2" },
  { col: 3, gridCol: "grid-cols-3", length: 9, size: "w-[5.5px] h-[5.5px]" },
  {
    col: 4,
    gridCol: "grid-cols-4",
    length: 12,
    size: "w-[5px] h-[5px] md:hidden lg:block",
  },
];

export default function GridIcons() {
  const { updateSearchParams } = useQueryParamUpdate();
  const { grid } = useCustomSearchParams();

  return (
    <div className="hidden md:flex gap-4 items-center">
      {gridArray.map(({ col, gridCol, length, size }) => (
        <div
          key={length}
          onClick={() => updateSearchParams("grid", col, false)}
          className={`grid ${gridCol} gap-1 group cursor-pointer`}
        >
          {Array.from({ length }).map((_, i) => (
            <span
              key={i}
              className={`${size} ${
                (!grid && col === 4) || col === grid
                  ? "bg-blue-500"
                  : "bg-white"
              } rounded-full bg-white group-hover:bg-gray-500 transition-all duration-200`}
            ></span>
          ))}
        </div>
      ))}
    </div>
  );
}
