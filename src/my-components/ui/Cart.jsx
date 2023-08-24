import Link from "next/link";

export default function Cart({ showSidebar }) {
  return (
    <Container showSidebar={showSidebar}>
      <CartHeader />
    </Container>
  );
}

function Container({ children, showSidebar }) {
  return (
    <div
      className={`flex flex-col justify-center p-4 mt-4 text-white ${
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
      <hr className="mt-4" />
    </>
  );
}
