"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import useQueryParamUpdate from "@/hooks/useQueryParamUpdate";
import useCustomSearchParams from "@/hooks/useCustomSearchParams";

export default function NumberSelect() {
  const { updateSearchParams } = useQueryParamUpdate();
  const { perPage } = useCustomSearchParams();
  return (
    <Select
      defaultValue={perPage}
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
