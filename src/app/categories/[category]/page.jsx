import Section from "@/lib/Section";
import { toCamelCase, toTitleCase } from "@/lib/utils";
import Filters from "@/my-components/filters/Filters";
import categories from "@/my-components/nav/categories";
import ProductsFooter from "@/my-components/products/ProductsFooter";
import ProductsHeader from "@/my-components/products/ProductsHeader";
import ProductsMain from "@/my-components/products/ProductsMain";

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: toCamelCase(category.title),
  }));
}

export default function Category({
  params: { category },
  searchParams: { grid },
}) {
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
          <ProductsHeader />
          <ProductsMain grid={grid} />
          <ProductsFooter />
        </div>
      </Section>
    </main>
  );
}
