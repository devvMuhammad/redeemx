import NumberSelect from "./NumberSelect";
import SortSelect from "./SortSelect";
import FiltersSheet from "./FiltersSheet";
import GridIcons from "./GridIcons";
import categories from "../nav/categories";

export default function ProductsHeader() {
  // memoized request here
  return (
    <div className="flex justify-between items-center py-2 lg:px-2 ">
      <p className="hidden md:block text-lg">
        Showing <strong>10</strong> of <strong>25</strong> Items
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
