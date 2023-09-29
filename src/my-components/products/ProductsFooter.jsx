"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useTransition } from "react";
import { cn } from "@/lib/utils";
import useQueryParamUpdate from "@/lib/useQueryParamUpdate";
import { useSearchParams } from "next/navigation";

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

  const searchParams = useSearchParams();
  const { updateSearchParams } = useQueryParamUpdate();

  const page = +searchParams.get("page") || 1;
  // page = 10, then 8, otherwise page - 1 normally
  const count = page >= MAX_NUM ? MAX_NUM - (BUTTONS_NUM - 1) : page - 1 || 1;
  const arr = Array.from({ length: BUTTONS_NUM }, (_, i) => count + i);

  return (
    <div className="flex justify-center items-center h-20 border-white">
      <div className="flex gap-2">
        <ButtonSm
          onClick={() => updateSearchParams("page", 1, false)}
          disabled={page === 1}
          className="hidden md:block"
        >
          <ChevronsLeftIcon />
        </ButtonSm>
        <ButtonSm
          onClick={() => updateSearchParams("page", page - 1, false)}
          disabled={page <= 2}
          className="hidden md:block"
        >
          <ChevronLeftIcon />
        </ButtonSm>
        {/* BUTTONS */}
        {arr.map((num) => (
          <ButtonSm
            key={num}
            active={page === num}
            onClick={() => updateSearchParams("page", num, false)}
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
        {MAX_NUM - page >= BUTTONS_NUM - 1 && (
          <ButtonSm
            className="w-10 text-md"
            onClick={() => updateSearchParams("page", MAX_NUM, false)}
          >
            {MAX_NUM}
          </ButtonSm>
        )}
        <ButtonSm
          className="hidden md:block"
          disabled={page === MAX_NUM}
          onClick={() => updateSearchParams("page", num - 1, false)}
        >
          <ChevronRightIcon />
        </ButtonSm>
        <ButtonSm
          className="hidden md:block"
          disabled={page === MAX_NUM}
          onClick={() => updateSearchParams("page", MAX_NUM, false)}
        >
          <ChevronsRightIcon />
        </ButtonSm>
      </div>
    </div>
  );
}
