import React from "react";
import Hamburger from "../ui/Hamburger";
import NavMenu from "./NavMenu";
import CartIcon from "../cart/CartIcon";
import Link from "next/link";
import UserProfile from "./UserProfile";
import SearchBar from "./SearchIcon";

function NavBar() {
  return (
    <header className="sticky z-30 top-0 h-16 p-6 lg:p-10 flex justify-between items-center bg-black text-white opacity-95 border-b-[1px] border-solid border-b-gray-700">
      <Hamburger />
      <div className="flex items-center gap-12">
        <Link className="text-3xl font-extrabold" href="/">
          RedeemX
        </Link>
        <NavMenu />
      </div>
      <div className="flex items-center gap-2">
        <SearchBar />
        <CartIcon />
        <UserProfile />
      </div>
    </header>
  );
}

export default NavBar;
