import { Checkbox } from "@/components/ui/checkbox";

function ReviewsFilter() {
  return (
    <div className="space-y-2">
      <h1 className="font-bold text-left tracking-wide">Reviews</h1>
      {/* CHECKBOXES */}
      {["4 stars & up", "3 stars & up", "2 stars & up", "1 star & up"].map(
        (review) => (
          <div className="flex items-center space-x-2 pl-4">
            <Checkbox id={review} />
            <label
              htmlFor={review}
              className="text-md leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {review}
            </label>
          </div>
        )
      )}
    </div>
  );
}

export default ReviewsFilter;
