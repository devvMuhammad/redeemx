import Product from "../../../db/productsSchema";
import FiltersClient from "./FiltersClient";

export async function getFilters() {
  // data needed for filters: number of items of each category, maximum and minimum price
  // const response = await fetch("http://localhost:3000/api/filters");
  const brands = await Product.aggregate([
    {
      $group: {
        _id: "$brand",
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        name: "$_id",
        count: 1,
      },
    },
    { $sort: { name: 1 } },
  ]);
  return brands;
}
export default async function FiltersServer({ titledCategory }) {
  const brands = await getFilters();
  // const brands = await
  console.log(brands);
  return (
    <FiltersClient
      brands={brands}
      titledCategory={titledCategory}
      asSheet={false}
    />
  );
}
