import NavBar from "@/my-components/header/nav/NavBar";
import HomePage from "@/my-components/header/Home";
export default function Home() {
  return (
    <main>
      <header className="flex flex-col min-h-screen">
        <NavBar />
        <HomePage />
      </header>
    </main>
  );
}
