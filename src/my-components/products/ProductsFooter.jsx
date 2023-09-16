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

export default function ProductsFooter() {
  const BUTTONS_NUM = 3;
  const MAX_NUM = 10;

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const arr = Array.from({ length: BUTTONS_NUM }).map(
    (_, i, array) => count + i
  );
  const next = () => {
    setPage((prev) => prev + 1);
    // if currentPage is the end of button, then increase the count
    if (page === arr[arr.length - 2] && page < MAX_NUM - 2) {
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
                if (num === MAX_NUM - 1) {
                  return prev;
                }
                if (num === arr[arr.length - 1] && num < MAX_NUM - 1) {
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
        {page <= MAX_NUM - BUTTONS_NUM && (
          <ButtonSm className="text-xl tracking-wide cursor-default">
            ...
          </ButtonSm>
        )}
        {/* LAST PageBER */}
        <ButtonSm
          className="w-10 text-md"
          onClick={() => {
            setCount(MAX_NUM - BUTTONS_NUM);
            setPage(MAX_NUM);
          }}
          active={page === MAX_NUM}
        >
          {MAX_NUM}
        </ButtonSm>
        <ButtonSm disabled={page === MAX_NUM} onClick={next}>
          <ChevronRightIcon />
        </ButtonSm>
        <ButtonSm
          disabled={page === MAX_NUM}
          onClick={() => {
            setCount(MAX_NUM - BUTTONS_NUM);
            setPage(MAX_NUM);
          }}
        >
          <ChevronsRightIcon />
        </ButtonSm>
      </div>
    </div>
  );
}
