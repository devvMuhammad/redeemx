import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "700"],
  style: "normal",
});

function HomePage() {
  return (
    <section
      className={`${inter.className} h-[calc(100vh-4rem)] flex flex-col justify-center gap-10 text-center flex-1 bg-black text-white p-4 md:p-10 lg:p-20`}
    >
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter">
        Buy The Best Products You Like
      </h1>
      <p className="font-thin text-base md:text-xl text-gray-300">
        Discover an exquisite range of laptops that boost productivity,
        smartphones that keep you connected in style, and gift cards that unlock
        a world of possibilities - all designed to elevate your modern lifestyle
      </p>
    </section>
  );
}

export default HomePage;
