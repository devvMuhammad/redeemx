"use client";
import Link from "next/link";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const totalCost = items.reduce((acc, elm) => acc + elm.totalPrice, 0);
  console.log(items);
  return (
    <Container>
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
      {totalCost !== 0 && <CartFooter totalCost={totalCost} />}
    </Container>
  );
}

function Container({ children }) {
  return (
    <div className="h-full flex flex-col justify-between p-4 text-white">
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

function CartFooter({ totalCost }) {
  // note that toFixed returns a string so must convert it to a number before you perform any operations on it
  const tax = totalCost * 0.05;
  return (
    <ul className="flex flex-col gap-1 pt-2 border-t-2 border-solid border-white">
      <div className="grid grid-cols-2">
        <p className="font-bold text-md">Current Cost</p>
        <span className="font-thin">${totalCost.toFixed(2)}</span>
      </div>
      <div className="grid grid-cols-2">
        <p className="font-bold text-md">Tax (5%)</p>
        <span className="font-thin">${tax.toFixed(2)}</span>
      </div>
      <div className="grid grid-cols-2">
        <p className="font-bold text-md">Shipping</p>
        <span className="font-thin">Free</span>
      </div>
      <hr />
      <div className="grid grid-cols-2 mt-3">
        <p className="font-bold text-md">Total Cost</p>
        <span className="font-thin">${(totalCost + tax).toFixed(2)}</span>
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
