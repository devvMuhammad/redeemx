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
export default function SortSelect() {
  const { updateSearchParams } = useQueryParamUpdate();
  return (
    <Select
      defaultValue="price_asc"
      onValueChange={(value) => updateSearchParams("sort", value, false)}
    >
      <SelectTrigger className="w-[170px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="price_asc">Price: Low to High</SelectItem>
          <SelectItem value="price_dsc">Price: High to Low</SelectItem>
          <SelectItem value="newest">Newest Arrivals</SelectItem>
          <SelectItem value="best">Best Sellers</SelectItem>
          <SelectItem value="a-z">A-Z</SelectItem>
          <SelectItem value="z-a">Z-A</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
