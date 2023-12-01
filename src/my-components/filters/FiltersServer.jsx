import { getFilters } from "../../../db/gets/getFilters";
import FiltersClient from "./FiltersClient";

export default async function FiltersServer({ titledCategory }) {
  const brands = await getFilters();

  return (
    <FiltersClient
      brands={brands}
      titledCategory={titledCategory}
      asSheet={false}
    />
  );
}
