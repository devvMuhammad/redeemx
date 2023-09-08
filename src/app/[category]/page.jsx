import { Checkbox } from "@/components/ui/checkbox";
import Section from "@/lib/Section";
import { toTitleCase } from "@/lib/utils";
import PriceRange from "@/my-components/PriceRange";
import BrandFilter from "@/my-components/filters/BrandFilter";
import PriceFilter from "@/my-components/filters/PriceFilter";
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
        <div className="px-3 pt-8 hidden lg:flex flex-col space-y-8">
          <PriceFilter />
          <BrandFilter titledCategory={titledCategory} />
        </div>
        {/* PRODUCTS */}
        <div className="bg-sky-500">Hi man</div>
      </Section>
    </main>
  );
}
