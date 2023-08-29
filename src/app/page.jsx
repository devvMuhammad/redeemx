import HomePage from "@/my-components/header/HomePage";
import Categories from "@/my-components/Categories";
export default function Home() {
  return (
    <main className="grid gap-10 bg-black text-white">
      <HomePage />
      <Categories />
    </main>
  );
}
