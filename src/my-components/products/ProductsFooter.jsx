"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

function ButtonSm({ children, className, active, ...props }) {
  return (
    <Button
      size="sm"
      {...props}
      className={cn(
        `w-10 text-md ${
          active && "bg-black hover:bg-black text-white border-2"
        }`,
        className
      )}
    >
      {children}
    </Button>
  );
}

/*Desired Output:
- when you click the first and second, just the active button changes
- when you click third, pagination movies by one
- clicking double arrow moves you till end, the first second third changes respectively
- also disable the first and last accordingly
*/
export default function ProductsFooter() {
  // [3,4,5]
  // [1,2,3]
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const arr = Array.from({ length: 3 }).map((_, i, array) => count + i);
  const next = () => {
    setPage((prev) => prev + 1);
    // if currentPage is the end of button, then increase the count
    if (page === arr[arr.length - 2] && page < 10 - 2) {
      setCount((prev) => prev + 2);
    }
  };
  const prev = () => {
    setPage((prev) => prev - 1);

    if (page === arr[0]) {
      console.log("h1");
      setCount((prev) => prev - 2);
    }
  };
  console.log(arr);
  return (
    <div className="flex items-center justify-center b-yellow-500 h-20 bordr-t border-white">
      <div className="flex gap-2 ">
        <ButtonSm
          disabled={page === 1}
          onClick={() => {
            setPage(1);
            setCount(1);
          }}
        >
          <ChevronsLeftIcon />
        </ButtonSm>
        <ButtonSm disabled={page === 1} onClick={prev}>
          <ChevronLeftIcon />
        </ButtonSm>
        {/* PageBERS */}
        {arr.map((num) => (
          <ButtonSm
            key={num}
            onClick={() => {
              setPage(num);
              setCount((prev) => {
                if (num === 10 - 1) {
                  return prev;
                }
                if (num === arr[arr.length - 1] && num < 10 - 1) {
                  return prev + 2;
                }
                if (num === arr[0] && num > 1) {
                  return prev - 2;
                }
                return prev;
                // num !== arr[arr.length - 1] ? prev : prev + 2
              });
            }}
            active={page === num}
          >
            {num}
          </ButtonSm>
        ))}
        {/* DOTS */}
        {page > 10 - 3 || (
          <ButtonSm className="text-xl tracking-wide cursor-default">
            ...
          </ButtonSm>
        )}
        {/* LAST PageBER */}
        <ButtonSm
          className="w-10 text-md"
          onClick={() => {
            setCount(7);
            setPage(10);
          }}
          active={page === 10}
        >
          10
        </ButtonSm>
        <ButtonSm disabled={page === 10} onClick={next}>
          <ChevronRightIcon />
        </ButtonSm>
        <ButtonSm disabled={page === 10}>
          <ChevronsRightIcon />
        </ButtonSm>
      </div>
    </div>
  );
}
