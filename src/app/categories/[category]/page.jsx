import Section from "@/lib/Section";
import { toTitleCase } from "@/lib/utils";
import Filters from "@/my-components/filters/Filters";
import ProductsHeader from "@/my-components/products/ProductsHeader";

export default function Category({ params: { category } }) {
  const titledCategory = toTitleCase(category);

  return (
    <main className="grid mt-8">
      <Section className="space-y-3 mb-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {titledCategory}
        </h1>
      </Section>
      <Section className="grid lg:grid-cols-[15rem_1fr] h-screen pt-2 ">
        {/* FILTERS */}
        <Filters titledCategory={titledCategory} asSheet={false} />
        {/* PRODUCTS */}
        <div className="flex flex-col bg-sy-500">
          {/* PRODUCTS HEADER */}
          <ProductsHeader />
          {/* MAIN PRODUCTS */}
          <div className="flex-1 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 b-red-500">
            {Array.from({ length: 9 }, (_, i) => (
              <div className="flex flex-col gap-2 border p-2">
                <div className="h-[200px] bg-white"></div>
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam atque delectus ipsa quo. Ab facilis excepturi
                </h1>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
