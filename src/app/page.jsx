import HomePage from "@/my-components/header/HomePage";
import Categories from "@/my-components/Categories";
import Featured from "@/my-components/Featured";
export default function Home() {
  return (
    <main className="grid gap-10">
      <HomePage />
      <Categories />
      <Featured />
    </main>
  );
}
