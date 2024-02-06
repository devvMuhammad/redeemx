import NavBar from "@/components/nav/NavBar";
// import "./globals.css";
// import { Poppins } from "next/font/google";
// import Providers from "@/store/Provider";

// const poppins = Poppins({ subsets: ["latin"], weight: "500" });
// const inter = Inter({ weight: "400", subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    // <main className={`${poppins.className} m-0 overflow-y-auto`}>
    <main>
      <NavBar />
      {children}
    </main>
  );
}