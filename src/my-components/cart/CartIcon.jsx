"use client";
import React, { useState } from "react";
import SideDrawer from "../ui/SideDrawer";
import Cart from "./Cart";
import { useSelector } from "react-redux";

function CartIcon() {
  const totalProducts = useSelector((state) => state.cart.totalQuantity);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <SideDrawer
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        riseFromWhere="right"
        visibleAll={true}
        purpose="cart"
      >
        <Cart showSidebar={showSidebar} />
      </SideDrawer>
      <button
        onClick={() => setShowSidebar(true)}
        className="inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-white hover:text-black hover:text-accent-foreground h-9 w-9 relative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>
        {totalProducts > 0 && (
          <div className="h-5 w-5 flex items-center justify-center bg-white text-black text-sm absolute right-[-10px] bottom-[-5px] rounded-full border-2 border-black border-solid">
            {totalProducts}
          </div>
        )}
      </button>
    </>
  );
}

export default CartIcon;
