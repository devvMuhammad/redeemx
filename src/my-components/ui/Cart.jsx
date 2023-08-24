import Link from "next/link";

export default function Cart({ showSidebar }) {
  <div
    className={`flex flex-col justify-center p-4 mt-4 ${
      showSidebar
        ? "transition-opacity duration-200 ease-linear opacity-100"
        : "opacity-0"
    }`}
  >
    <p className="font-bold text-xl text-left">
      Cart
      <Link
        href=""
        className="inline-block ml-2 text-sm font-normal hover:underline hover:translate-y-[-1px]"
      >
        ( View full here )
      </Link>
    </p>
  </div>;
}
