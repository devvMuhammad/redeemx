import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function SortSelect() {
  return (
    <Select defaultValue="price-low-to-high">
      <SelectTrigger className="w-[170px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="price-low-to-high">Price: Low to High</SelectItem>
          <SelectItem value="price-high-to-low">Price: High to Low</SelectItem>
          <SelectItem value="newest">Newest Arrivals</SelectItem>
          <SelectItem value="best-sellers">Best Sellers</SelectItem>
          <SelectItem value="a-z">A-Z</SelectItem>
          <SelectItem value="z-a">Z-A</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
