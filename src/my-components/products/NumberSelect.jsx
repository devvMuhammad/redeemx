"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import useQueryParamUpdate from "@/lib/useQueryParamUpdate";

export default function NumberSelect() {
  const searchParams = useSearchParams();
  const { updateSearchParams } = useQueryParamUpdate();
  const number = +searchParams.get("perPage") || 10;
  return (
    <Select
      defaultValue={number}
      onValueChange={(value) => {
        updateSearchParams("perPage", value, false);
      }}
    >
      <SelectTrigger className="w-[55px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Array.from({ length: 3 }, (_, i) => {
            const num = 10 * (i + 1);
            return (
              <SelectItem key={num} value={num}>
                {num}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
