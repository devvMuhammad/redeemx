import FeaturedCarousel from "./FeaturedCarousel";

export default function Featured() {
  return (
    <section className="space-y-8">
      <h1 className="px-6 lg:px-10 text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        Featured Products
      </h1>
      <FeaturedCarousel />
    </section>
  );
}
