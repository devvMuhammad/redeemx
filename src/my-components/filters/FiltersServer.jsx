import FiltersClient from "./FiltersClient";

export async function getFilters() {
  // data needed for filters: number of items of each category, maximum and minimum price
  const response = await fetch("http://localhost:3000/api/filters");
  // const []
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
