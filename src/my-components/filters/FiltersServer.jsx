import FiltersClient from "./FiltersClient";

export async function getFilters() {
  // date needed for filters:
  const response = await fetch("http://localhost:3000/api/filters");
  return response.json();
}
export default async function FiltersServer({ titledCategory }) {
  const { data: categories } = await getFilters();
  return (
    <FiltersClient
      categories={categories}
      titledCategory={titledCategory}
      asSheet={false}
    />
  );
}
