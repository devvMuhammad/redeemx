"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function NumberSelect() {
  return (
    <Select defaultValue={10}>
      <SelectTrigger className="w-[55px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Array.from({ length: 3 }, (_, i) => {
            const num = 10 * (i + 1);
            return <SelectItem value={num}>{num}</SelectItem>;
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
