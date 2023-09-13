import Section from "@/lib/Section";
import { toTitleCase } from "@/lib/utils";
import Filters from "@/my-components/filters/Filters";
import ProductsHeader from "@/my-components/products/ProductsHeader";

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
