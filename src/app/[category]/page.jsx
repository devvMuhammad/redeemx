import { Checkbox } from "@/components/ui/checkbox";
import Section from "@/lib/Section";
import { toTitleCase } from "@/lib/utils";
import PriceRange from "@/my-components/PriceRange";
import categories from "@/my-components/nav/categories";

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
      <Section className="grid lg:grid-cols-[15rem_1fr] h-96">
        {/* FILTERS */}
        <div className="p-2 hidden lg:flex flex-col space-y-4">
          <h1 className="font-bold text-left tracking-wide">Select Price</h1>
          <PriceRange />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-left tracking-wide">Brand</h1>
            {/* CHECKBOXES */}
            {categories
              .find((cat) => cat.title === titledCategory)
              ?.menu.map((brand) => (
                <div className="flex items-center space-x-2 pl-4">
                  <Checkbox id={brand} />
                  <label
                    htmlFor={brand}
                    className="text-md leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {brand}
                  </label>
                </div>
              ))}
          </div>
        </div>
        {/* PRODUCTS */}
        <div className="bg-sky-500">Hi man</div>
      </Section>
    </main>
  );
}
