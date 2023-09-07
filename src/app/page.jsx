import HomePage from "@/my-components/HomePage";
import Categories from "@/my-components/Categories";
import Featured from "@/my-components/featured/Featured";
export default function Home() {
  return (
    <main className="grid gap-20">
      <HomePage />
      <Categories />
      <Featured />
    </main>
  );
}
