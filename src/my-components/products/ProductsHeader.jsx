import NumberSelect from "./NumberSelect";
import SortSelect from "./SortSelect";
import FiltersSheet from "./FiltersSheet";
import GridIcons from "./GridIcons";
// import categories from "../nav/categories";
import { getFilters } from "../filters/FiltersServer";
import ShowItems from "./ShowItems";
// import ShowItems from "./ShowItems";

export default async function ProductsHeader({ length, total }) {
  // memoized request
  const brands = await getFilters();
  return (
    <div className="flex justify-between items-center py-2 lg:px-2 ">
      {/* <ShowItems /> */}
      <ShowItems length={length} total={total} />
      <GridIcons />
      <div className="flex gap-2 items-center justify-between w-full md:w-auto">
        <div className="flex gap-2">
          <NumberSelect />
          <SortSelect />
        </div>
        <FiltersSheet brands={brands} />
      </div>
    </div>
  );
}
