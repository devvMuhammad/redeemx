import HomePage from "@/components/HomePage";
import Categories from "@/components/Categories";
import Featured from "@/components/featured/Featured";
import SearchBar2 from "@/components/nav/SearchIcon2";
export default function Home() {
  return (
    <main className="grid gap-20">
      <HomePage />
      <Categories />
      <Featured />
      <div>
        <SearchBar2 />
      </div>
    </main>
  );
}
