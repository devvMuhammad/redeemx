"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useQueryParamUpdate from "@/lib/useQueryParamUpdate";
import { useSearchParams } from "next/navigation";
export default function SortSelect() {
  const { updateSearchParams } = useQueryParamUpdate();
  const sort = useSearchParams().get("sort") || "price.1";
  return (
    <Select
      defaultValue={sort}
      onValueChange={(value) => updateSearchParams("sort", value, false)}
    >
      <SelectTrigger className="w-[170px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="price.1">Price: Low to High</SelectItem>
          <SelectItem value="price.-1">Price: High to Low</SelectItem>
          <SelectItem value="date.1">Newest Arrivals</SelectItem>
          <SelectItem value="sold.1">Best Sellers</SelectItem>
          <SelectItem value="name.1">A-Z</SelectItem>
          <SelectItem value="name.-1">Z-A</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
