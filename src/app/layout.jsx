import NavBar from "@/my-components/nav/NavBar";
import "./globals.css";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
// const inter = Inter({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} m-0 overflow-y-auto`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
