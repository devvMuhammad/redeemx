import Section from "@/lib/Section";
import { toTitleCase } from "@/lib/utils";
import PriceRange from "@/my-components/PriceRange";

export default function Category({ params: { category } }) {
  return (
    <main className="grid mt-8">
      <Section className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">
          {toTitleCase(category)}
        </h1>
        <p className="text-xl border-b border-gray-500 pb-2">
          Buy the {category} from us at the best prices in the best condition.
        </p>
      </Section>
      <Section className="grid lg:grid-cols-[15rem_1fr] h-96">
        <div className="p-2 hidden lg:flex flex-col bg-red-500 space-y-4">
          <h1 className="font-bold text-left">Select Price</h1>
          <PriceRange />
        </div>
        <div className="bg-sky-500">Hi man</div>
      </Section>
    </main>
  );
}
