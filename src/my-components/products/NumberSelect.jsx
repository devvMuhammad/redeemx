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
  const { updateSearchParams } = useQueryParamUpdate();
  return (
    <Select
      defaultValue={10}
      onValueChange={(value) => {
        updateSearchParams("perPage", value);
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
