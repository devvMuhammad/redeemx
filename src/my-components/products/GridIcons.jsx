"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

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
  const searchParams = useSearchParams();
  const router = useRouter();
  // const pathname = usePathname();

  return (
    <div className="hidden md:flex gap-4 items-center">
      {gridArray.map(({ col, gridCol, length, size }) => (
        <div
          key={length}
          onClick={() => {
            router.push(`?grid=${col}`);
          }}
          className={`grid ${gridCol} gap-1 group cursor-pointer`}
        >
          {Array.from({ length }).map((_, i) => (
            <span
              key={i}
              className={`${size} ${
                (!searchParams.get("grid") && col === 4) ||
                col === +searchParams.get("grid")
                  ? "bg-slate-500"
                  : "bg-white"
              } rounded-full bg-white group-hover:bg-gray-500 transition-all duration-200`}
            ></span>
          ))}
        </div>
      ))}
    </div>
  );
}
