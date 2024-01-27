import Image from "next/image";
import laptops from "@/assets/laptop.jpg";
import mobiles from "@/assets/phones.jpg";
import giftCards from "@/assets/gift-cards.jpg";
import accessories from "@/assets/accessories.jpg";
import Link from "next/link";

export default function Categories() {
  const categories = [
    { link: "laptops", image: laptops, title: "Laptops" },
    { link: "mobiles", image: mobiles, title: "Mobiles" },
    { link: "gift-cards", image: giftCards, title: "Gift Cards" },
    { link: "accessories", image: accessories, title: "Accessories" },
  ];
  return (
    <section className="space-y-8 px-6 lg:px-10 pb-2">
      <h1 className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
        Browse Categories
      </h1>
      {/* ------------- PICTURES ------------- */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {categories.map(({ link, title, image }) => (
          <Link
            key={link}
            href={`/categories/${link}`}
            className="group h-[400px] rounded-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 z-10 transition-transform bg-black/60 group-hover:bg-black/70" />
            <Image
              src={image}
              alt={link}
              fill
              className="rounded-xl object-cover transition-transform group-hover:scale-125 cursor-pointer"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <h3 className="text-3xl font-bold capitalize text-slate-100 md:text-2xl">
                {title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
