import Link from "next/link";
import CartItem from "./CartItem";

export default function Cart({ showSidebar }) {
  return (
    <Container showSidebar={showSidebar}>
      <CartHeader />
      <div className="flex-1 flex flex-col gap-4 overflow-y-auto overflow-x-hidden text-sm pb-2 pr-2">
        {Array(4)
          .fill("")
          .map(() => (
            <CartItem />
          ))}
      </div>
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
