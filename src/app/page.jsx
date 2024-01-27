import HomePage from "@/components/HomePage";
import Categories from "@/components/Categories";
import Featured from "@/components/featured/Featured";
export default function Home() {
  return (
    <main className="grid gap-20">
      <HomePage />
      <Categories />
      <Featured />
    </main>
  );
}
