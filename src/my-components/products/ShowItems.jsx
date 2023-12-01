"use client";
import useCustomSearchParams from "@/hooks/useCustomSearchParams";

function ShowItems({ length, total }) {
  const { page, perPage } = useCustomSearchParams();
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
