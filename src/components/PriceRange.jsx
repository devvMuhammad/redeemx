"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import useCustomSearchParams from "@/hooks/useCustomSearchParams";
import useQueryParamUpdate from "@/hooks/useQueryParamUpdate";
import { useState, useTransition } from "react";
export default function PriceRange() {
  const { updateSearchParams } = useQueryParamUpdate();
  const { price } = useCustomSearchParams();
  const [priceRange, setPriceRange] = useState([price[0], price[1]]);
  const [isPending, startTransition] = useTransition();
  return (
    <>
      <Slider
        max={10000}
        step={100}
        value={priceRange}
        onValueChange={(value) => setPriceRange(value)}
      />
      <div className="flex items-center space-x-4">
        <Input
          type="number"
          inputMode="numeric"
          min={0}
          max={priceRange[1]}
          className="h-9"
          value={priceRange[0]}
          onChange={(e) => {
            const value = Number(e.target.value);
            startTransition(() => {
              setPriceRange([value, priceRange[1]]);
            });
          }}
        />
        <span>-</span>
        <Input
          type="number"
          inputMode="numeric"
          min={priceRange[0]}
          max={500}
          className="h-9"
          value={priceRange[1]}
          onChange={(e) => {
            const value = Number(e.target.value);
            startTransition(() => {
              setPriceRange([priceRange[0], value]);
            });
          }}
        />
      </div>
      <div className="w-full flex justify-end">
        <Button
          disabled={isPending}
          size="sm"
          className="font-bold tracking-wide right-0 inline-flex"
          onClick={() => {
            startTransition(() => {
              updateSearchParams(
                "price",
                `${priceRange[0]}-${priceRange[1]}`,
                false,
                true
              );
            });
          }}
        >
          Apply Price
        </Button>
      </div>
    </>
  );
}
