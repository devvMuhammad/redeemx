import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Section from "@/lib/Section";
import { toTitleCase } from "@/lib/utils";
import BrandFilter from "@/my-components/filters/BrandFilter";
import PriceFilter from "@/my-components/filters/PriceFilter";
import ReviewsFilter from "@/my-components/filters/ReviewsFilter";

export default function Category({ params: { category } }) {
  const titledCategory = toTitleCase(category);

  return (
    <main className="grid mt-8">
      <Section className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">{titledCategory}</h1>
        <p className="text-xl border-b border-gray-500 pb-2">
          Buy {titledCategory} from us at the best prices in the best condition.
        </p>
      </Section>
      <Section className="grid lg:grid-cols-[15rem_1fr] h-screen mt-2 pt-2">
        {/* FILTERS */}
        <div className="px-3 hidden lg:block space-y-8">
          <PriceFilter />
          <BrandFilter titledCategory={titledCategory} />
          <ReviewsFilter />
          <Button className="font-bold tracking-wide">Apply Filters</Button>
        </div>
        {/* PRODUCTS */}
        <div className="">
          <div className="flex justify-between items-center">
            <p className="text-lg">
              <strong>10</strong> of <strong>25</strong> results
            </p>
            <div className="flex gap-2 items-center">
              <span className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-grid-2x2"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 12h18" />
                  <path d="M12 3v18" />
                </svg>
              </span>
              <span className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-grid-3x3"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M3 15h18" />
                  <path d="M9 3v18" />
                  <path d="M15 3v18" />
                </svg>
              </span>
            </div>
            <div>
              <Select defaultValue="price-low-to-high">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sort Options</SelectLabel>
                    <SelectItem value="price-low-to-high">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high-to-low">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="newest">Newest Arrivals</SelectItem>
                    <SelectItem value="best-sellers">Best Sellers</SelectItem>
                    <SelectItem value="a-z">A-Z</SelectItem>
                    <SelectItem value="z-a">Z-A</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
