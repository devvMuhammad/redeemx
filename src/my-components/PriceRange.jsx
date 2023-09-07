"use client";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
export default function PriceRange() {
  const [priceRange, setPriceRange] = useState([0, 100]);

  return (
    <>
      <Slider
        variant="range"
        thickness="thin"
        max={500}
        step={1}
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
            setPriceRange([value, priceRange[1]]);
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
            setPriceRange([priceRange[0], value]);
          }}
        />
      </div>
    </>
  );
}
