import Section from "@/lib/Section";
import { toTitleCase } from "@/lib/utils";
import Filters from "@/my-components/filters/Filters";
import ProductsHeader from "@/my-components/products/ProductsHeader";
import ProductsMain from "@/my-components/products/ProductsMain";

export default function Category({ params: { category } }) {
  const titledCategory = toTitleCase(category);

  return (
    <main className="grid mt-8">
      <Section className="space-y-3 mb-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pb-4 border-b border-gray-500">
          {titledCategory}
        </h1>
      </Section>
      <Section className="grid lg:grid-cols-[15rem_1fr] h-scren ">
        {/* FILTERS */}
        <Filters titledCategory={titledCategory} asSheet={false} />
        {/* PRODUCTS */}
        <div className="flex flex-col bg-sy-500">
          {/* PRODUCTS HEADER */}
          <ProductsHeader />
          {/* MAIN PRODUCTS */}
          <ProductsMain />
        </div>
      </Section>
    </main>
  );
}
