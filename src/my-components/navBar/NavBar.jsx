import React from "react";
import Hamburger from "./Hamburger";
import NavMenu from "./NavMenu";
import CartIcon from "./CartIcon";

function NavBar() {
  return (
    <nav className="h-16 p-6 lg:p-10 flex justify-between items-center bg-black text-white">
      <Hamburger />
      <div className="flex items-center gap-12">
        <h1 className="text-3xl font-extrabold">RedeemX</h1>
        <NavMenu />
      </div>
      <CartIcon />
    </nav>
  );
}

export default NavBar;
