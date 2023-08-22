"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const navBarMenu = [
  {
    title: "Laptops",
    menu: ["Dell", "HP", "Lenovo", "Apple", "Asus", "Acer"],
  },
  {
    title: "Mobiles",
    menu: ["Samsung", "Apple", "Xiaomi", "OnePlus", "Google", "Huawei"],
  },
  {
    title: "Gift Cards",
    menu: ["Steam", "Xbox", "PSN", "Itunes", "Google Play"],
  },
  {
    title: "Accessories",
    menu: ["Headphones", "Mouse", "Keyboard", "Graphic Cards", "Monitors"],
  },
];

export default function NavMenu() {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        {navBarMenu.map((nav) => (
          <>
            <NavigationMenuItem
              key={nav.title}
              className="transition-all duration-200 ease-in "
            >
              <NavigationMenuTrigger className="bg-transparent text-md">
                {nav.title}
              </NavigationMenuTrigger>

              <NavigationMenuContent className="bg-black text-white font-thin">
                <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] ">
                  {nav.menu.map((link) => (
                    <p>
                      <Link
                        key={link}
                        href={`/${link.toLowerCase().split(" ").join("")}`}
                        className="hover:underline"
                      >
                        {link}
                      </Link>
                    </p>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
