import NumberSelect from "./NumberSelect";
import SortSelect from "./SortSelect";
import ShowItems from "./ShowItems";
import FiltersNew from "../filters/FiltersNew";

export default async function ProductsHeader({ length, total, category }) {
  // memoized request
  // const brands = await getFilters();
  return (
    <div className="flex justify-between items-center py-2 lg:px-2 ">
      {/* <ShowItems /> */}
      {/* CREATING A BRAND NEW FILTERS CLIENT COMPONENT AND THEN I'LL REMOVE THE EXSITING ONES */}
      <div className="flex gap-3 items-center">
        <FiltersNew category={category} />
        <ShowItems length={length} total={total} />
      </div>
      <div className="flex gap-2 items-center justify-between w-full md:w-auto">
        <div className="flex gap-2">
          <NumberSelect />
          <SortSelect />
        </div>
        {/* <FiltersSheet brands={brands} /> */}
      </div>
    </div>
  );
}
