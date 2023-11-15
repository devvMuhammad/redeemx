import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import ResetButton from "./ResetButton";
import ReviewsFilter from "./ReviewsFilter";

export default function FiltersClient({ titledCategory, asSheet, brands }) {
  return (
    <div
      className={`${
        !asSheet && "hidden lg:block"
      } px-3 space-y-4 overflow-y-auto `}
    >
      <PriceFilter />
      <BrandFilter titledCategory={titledCategory} brandsList={brands} />
      <ReviewsFilter />
      <ResetButton />
    </div>
  );
}
