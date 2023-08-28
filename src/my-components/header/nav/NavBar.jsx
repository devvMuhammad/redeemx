import React from "react";
import Hamburger from "../../ui/Hamburger";
import NavMenu from "./NavMenu";
import CartIcon from "../../ui/CartIcon";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="sticky top-0 h-16 p-6 lg:p-10 flex justify-between items-center bg-black text-white opacity-95 border-b-2 border-solid border-b-gray-600">
      <Hamburger />
      <div className="flex items-center gap-12">
        <Link className="text-3xl font-extrabold" href="/">
          RedeemX
        </Link>
        <NavMenu />
      </div>
      <CartIcon />
    </nav>
  );
}

export default NavBar;
