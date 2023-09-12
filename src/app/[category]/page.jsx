import Section from "@/lib/Section";
import { toTitleCase } from "@/lib/utils";
import Filters from "@/my-components/filters/Filters";
import FiltersSheet from "@/my-components/products/FiltersSheet";
import NumberSelect from "@/my-components/products/NumberSelect";
import ProductsHeader from "@/my-components/products/ProductsHeader";
import SortSelect from "@/my-components/products/SortSelect";
import Grid2x2 from "@/my-components/ui/Grid2x2";
import Grid3x3 from "@/my-components/ui/Grid3x3";

export default function Category({ params: { category } }) {
  const titledCategory = toTitleCase(category);

  return (
    <main className="grid mt-8">
      <Section className="space-y-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {titledCategory}
        </h1>
        <p className="text-md lg:text-xl pb-2">
          Buy {titledCategory} from us at the best prices in the best condition.
        </p>
      </Section>
      <Section className="grid lg:grid-cols-[15rem_1fr] h-screen pt-2 ">
        {/* FILTERS */}
        <Filters titledCategory={titledCategory} asSheet={false} />
        {/* PRODUCTS */}
        <div className="bg-sy-500">
          {/* PRODUCTS HEADER */}
          <ProductsHeader />
          {/* MAIN PRODUCTS */}
        </div>
      </Section>
    </main>
  );
}
