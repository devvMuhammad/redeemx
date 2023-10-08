"use client";
import { useSearchParams } from "next/navigation";

function ShowItems({ length, total }) {
  const searchParams = useSearchParams();
  const perPage = +searchParams.get("perPage") || 10;
  const page = +searchParams.get("page") || 1;

  const start = (page - 1) * perPage + 1; // (1*0)*10 + 1
  const end = page * perPage; // 1*10
  return (
    <p className="hidden md:block text-lg">
      Showing <strong>{start}</strong>-
      <strong>{end > total ? total : end}</strong> of <strong>{total}</strong>{" "}
      Items
    </p>
  );
}

export default ShowItems;
