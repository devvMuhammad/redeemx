"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { cn } from "@/lib/utils";
import useQueryParamUpdate from "@/hooks/useQueryParamUpdate";
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

export default function ProductsFooter({ total }) {
  const searchParams = useSearchParams();
  const perPage = +searchParams.get("perPage") || 10;
  const page = +searchParams.get("page") || 1;

  const [isPending, startTransition] = useTransition();

  const MAX_NUM = Math.ceil(total / perPage);
  // console.log(MAX_NUM, total);
  const BUTTONS_NUM = MAX_NUM <= 3 ? MAX_NUM : 3;

  const { updateSearchParams } = useQueryParamUpdate();

  function updatePage(page) {
    startTransition(() => {
      updateSearchParams("page", page, false);
    });
  }

  // page = 10, then 8, otherwise page - 1 normally
  const count = page >= MAX_NUM ? MAX_NUM - (BUTTONS_NUM - 1) : page - 1 || 1;
  const arr = Array.from({ length: BUTTONS_NUM }, (_, i) => count + i);

  return (
    <div className="flex justify-center items-center h-20 border-white">
      <div className="flex gap-2">
        <ButtonSm
          onClick={() => updatePage(1)}
          disabled={page === 1 || isPending}
          className="hidden md:block"
        >
          <ChevronsLeftIcon />
        </ButtonSm>
        <ButtonSm
          onClick={() => updatePage(page - 1)}
          disabled={page <= 1 || isPending}
          className="hidden md:block"
        >
          <ChevronLeftIcon />
        </ButtonSm>
        {/* BUTTONS */}
        {arr.map((num) => (
          <ButtonSm
            key={num}
            active={page === num}
            disabled={isPending}
            onClick={() => updatePage(num)}
          >
            {num}
          </ButtonSm>
        ))}
        {/* DOTS */}

        {page <= MAX_NUM - BUTTONS_NUM && (
          <ButtonSm
            disabled={isPending}
            className="text-xl tracking-wide cursor-default"
          >
            ...
          </ButtonSm>
        )}
        {/* LAST PageBER */}
        {MAX_NUM - page > BUTTONS_NUM - 1 && (
          <ButtonSm
            className="w-10 text-md"
            disabled={isPending}
            onClick={() => updatePage(MAX_NUM)}
          >
            {MAX_NUM}
          </ButtonSm>
        )}
        <ButtonSm
          className="hidden md:block"
          disabled={page === MAX_NUM || isPending}
          onClick={() => updatePage(page + 1)}
        >
          <ChevronRightIcon />
        </ButtonSm>
        <ButtonSm
          className="hidden md:block"
          disabled={page === MAX_NUM || isPending}
          onClick={() => updatePage(MAX_NUM)}
        >
          <ChevronsRightIcon />
        </ButtonSm>
      </div>
    </div>
  );
}
