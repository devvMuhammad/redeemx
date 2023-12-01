"use client";
import Link from "next/link";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

export default function Cart({ showSidebar }) {
  const items = useSelector((state) => state.cart.items);
  console.log(items);
  return (
    <Container showSidebar={showSidebar}>
      <CartHeader />

      {items?.length > 0 ? (
        <div className="flex-1 flex flex-col gap-4 overflow-y-auto overflow-x-hidden text-sm pb-2 pr-2">
          {items.map((item, i) => (
            <CartItem key={i} item={item} />
          ))}
        </div>
      ) : (
        <EmptyCart />
      )}
      <CartFooter />
    </Container>
  );
}

function Container({ children, showSidebar }) {
  return (
    <div
      className={`h-full flex flex-col justify-between p-4 text-white ${
        showSidebar
          ? "transition-opacity duration-400 ease-linear opacity-100"
          : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function CartHeader() {
  return (
    <>
      <p className="font-bold text-xl text-left">
        Cart
        <Link
          href=""
          className="inline-block ml-2 text-sm font-normal hover:underline hover:translate-y-[-1px]"
        >
          ( View full here )
        </Link>
      </p>
      <hr className="mt-2 mb-4" />
    </>
  );
}

function CartFooter() {
  return (
    <ul className="flex flex-col gap-1 pt-2 border-t-2 border-solid border-white">
      <div className="grid grid-cols-2">
        <p className="font-bold text-md">Current Cost</p>
        <span className="font-thin">$100.312</span>
      </div>
      <div className="grid grid-cols-2">
        <p className="font-bold text-md">Tax (5%)</p>
        <span className="font-thin">$20.624</span>
      </div>
      <div className="grid grid-cols-2">
        <p className="font-bold text-md">Shipping</p>
        <span className="font-thin">Free</span>
      </div>
      <hr />
      <div className="grid grid-cols-2 mt-3">
        <p className="font-bold text-md">Total Cost</p>
        <span className="font-thin">$120.936</span>
      </div>
    </ul>
  );
}

function EmptyCart() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLineCap="round"
        strokeLineJoin="round"
        className="mb-4 h-16 w-16 text-muted-foreground"
        aria-hidden="true"
      >
        <circle cx="8" cy="21" r="1"></circle>
        <circle cx="19" cy="21" r="1"></circle>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
      </svg>
      <h1 className="text-2xl font-bold">Your cart is empty</h1>
      <p className="text-gray-400">Shop to add items to your cart</p>
    </div>
  );
}
