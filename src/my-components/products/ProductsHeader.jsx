import NumberSelect from "./NumberSelect";
import SortSelect from "./SortSelect";
import FiltersSheet from "./FiltersSheet";
import GridIcons from "./GridIcons";
// import categories from "../nav/categories";
import { getFilters } from "../filters/FiltersServer";
import ShowItems from "./ShowItems";

export default async function ProductsHeader({ products }) {
  // memoized request
  const { data: categories } = await getFilters();
  return (
    <div className="flex justify-between items-center py-2 lg:px-2 ">
      {/* <ShowItems /> */}
      <p className="hidden md:block text-lg">
        Showing <strong>{products.length > 10 ? 10 : products.length}</strong>{" "}
        of <strong>{products.length}</strong> Items
      </p>
      <GridIcons />
      <div className="flex gap-2 items-center justify-between w-full md:w-auto">
        <div className="flex gap-2">
          <NumberSelect />
          <SortSelect />
        </div>
        <FiltersSheet categories={categories} />
      </div>
    </div>
  );
}
