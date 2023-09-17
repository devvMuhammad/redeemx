import { Button } from "@/components/ui/button";

export default function ProductsMain({ grid = 4 }) {
  const gridObj = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  };
  return (
    <div
      className={`p-2 flex-1 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 ${gridObj[grid]} gap-y-4 gap-x-2 b-red-500`}
    >
      {Array.from({ length: 12 }, (_, i) => (
        <div className="flex flex-col p-4 gap-4 border border-gray-600 rounded-lg ">
          <div
            className={`${
              +grid === 2 ? "h-[300px]" : "h-[200px]"
            }  bg-gray-500 rounded-md`}
          ></div>

          {/* Link in future */}
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            repellat nemo
          </h2>
          {/* PRICES */}
          <div className="flex gap-8">
            <span className="font-semibold text-lg tracking-wider">$2000</span>
            <span className="font-semibold text-lg tracking-wider line-through">
              $1100
            </span>
          </div>

          <div>
            {/* Agar variant huwa to add kardena */}
            <Button className="font-bold tracking-wide" size="sm">
              Add to Cart
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
