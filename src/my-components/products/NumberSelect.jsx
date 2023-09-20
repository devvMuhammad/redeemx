"use client";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function NumberSelect() {
  const router = useRouter();
  return (
    <Select
      defaultValue={10}
      onValueChange={(value) => {
        router.push(`?per-page=${value}`);
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
