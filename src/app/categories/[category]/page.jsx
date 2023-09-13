import { Button } from "@/components/ui/button";
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
      <Section className="grid lg:grid-cols-[15rem_1fr] h-scren pt-2 ">
        {/* FILTERS */}
        <Filters titledCategory={titledCategory} asSheet={false} />
        {/* PRODUCTS */}
        <div className="flex flex-col bg-sy-500">
          {/* PRODUCTS HEADER */}
          <ProductsHeader />
          {/* MAIN PRODUCTS */}
          <div className="p-2 flex-1 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 b-red-500">
            {Array.from({ length: 9 }, (_, i) => (
              <div className="flex flex-col gap-4 border rounded-xl p-2">
                <div className="h-[200px] bg-white"></div>

                {/* Link in future */}
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti repellat nemo
                </h2>
                {/* PRICES */}
                <div className="w-full flex gap-3">
                  <span className="font-semibold text-xl tracking-wider mr-6">
                    $2000
                  </span>
                  <span className="font-semibold text-xl tracking-wider line-through">
                    $1100
                  </span>
                </div>

                <div>
                  {/* Agar variant huwa to add kardena */}
                  <Button className="font-bold tracking-wide" size="sm">
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
