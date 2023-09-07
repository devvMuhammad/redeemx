import { Slider } from "@/components/ui/slider";
import Section from "@/lib/Section";
import { toTitleCase } from "@/lib/utils";

export default function Category({ params: { category } }) {
  return (
    <main className="grid gap-2 pt-6">
      <Section className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">
          {toTitleCase(category)}
        </h1>
        <p className="text-xl border-b border-gray-500 pb-2">
          Buy the {category} from us at the best prices.
        </p>
      </Section>
      <Section className="grid lg:grid-cols-[15rem_1fr] h-screen px-0">
        <div className="bg-red-500 space-y-4">
          <h1 className="font-bold">Select Price</h1>
          <Slider
            defaultValue={[33]}
            max={100}
            step={10}
            className="w-[90%] mx-auto"
          />
        </div>
        <div className="bg-sky-500">Hi man</div>
      </Section>
    </main>
  );
}
