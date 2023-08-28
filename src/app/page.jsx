import NavBar from "@/my-components/header/nav/NavBar";
import HomePage from "@/my-components/header/HomePage";
export default function Home() {
  return (
    <main>
      <header className="flex flex-col h-screen">
        <NavBar />
        <HomePage />
      </header>
    </main>
  );
}
