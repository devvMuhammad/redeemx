"use client";
import { useSearchParams } from "next/navigation";

function ShowItems({ length, total }) {
  const searchParams = useSearchParams();
  const perPage = +searchParams.get("perPage");
  return (
    <p className="hidden md:block text-lg">
      Showing <strong>{length > perPage ? perPage : length}</strong> of{" "}
      <strong>{total}</strong> Items
    </p>
  );
}

export default ShowItems;
