import FeaturedCarousel from "./FeaturedCarousel";
export default function Featured() {
  return (
    <section className="mb-20">
      <h1 className="px-6 lg:px-10 text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
        Featured Products
      </h1>
      <h1 className="px-6 lg:px-10">React multi carousel</h1>
      <FeaturedCarousel />
    </section>
  );
}
