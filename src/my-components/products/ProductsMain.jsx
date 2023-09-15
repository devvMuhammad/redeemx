import { Button } from "@/components/ui/button";

export default function ProductsMain() {
  return (
    <div className="p-2 flex-1 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-1 b-red-500">
      {Array.from({ length: 8 }, (_, i) => (
        <div className="p-4 flex flex-col gap-4 border border-gray-600 rounded-lg ">
          <div className="h-[200px] bg-gray-500 rounded-md"></div>

          {/* Link in future */}
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            repellat nemo
          </h2>
          {/* PRICES */}
          <div className="w-full flex gap-8">
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
