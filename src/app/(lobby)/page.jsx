import HomePage from "@/components/HomePage";
import Categories from "@/components/Categories";
import Featured from "@/components/featured/Featured";
import WhatWeOffer from "@/components/WhatWeOffer";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="grid gap-20">
      <HomePage />
      <Categories />
      <Featured />
      <WhatWeOffer />
      {/* <div>
        <SearchBar2 />
      </div> */}
      <Footer />
    </main>
  );
}
