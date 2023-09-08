import PriceRange from "../PriceRange";

function PriceFilter() {
  return (
    <div className="space-y-4">
      <h1 className="font-bold text-left tracking-wide">Select Price</h1>
      <PriceRange />
    </div>
  );
}

export default PriceFilter;
