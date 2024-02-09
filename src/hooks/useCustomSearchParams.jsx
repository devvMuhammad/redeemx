import { useSearchParams } from "next/navigation";

export default function useCustomSearchParams() {
  //page, perPage, sort, brand, grid, perPage, price

  const searchParams = useSearchParams();
  const page = +searchParams.get("page") || 1;
  const perPage = +searchParams.get("perPage") || 10;

  const sort = searchParams.get("sort") || "price.1";
  const grid = +searchParams.get("grid") || 4;
  const brand = searchParams.get("brand");
  const brands = brand?.split(".") || [brand];
  const price = searchParams
    .get("price")
    ?.split("-")
    ?.map((elm) => Number(elm));

  return { page, sort, perPage, grid, brands, price };
}
