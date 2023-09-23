import { Button } from "@/components/ui/button";
import { connectDB } from "@/lib/connectDB";
import Product from "@/lib/productsSchema";

export default async function ProductsMain({ grid, products }) {
  const gridObj = {
    2: "lg:grid-cols-2 gap-x-8",
    3: "lg:grid-cols-3 gap-x-6",
    4: "lg:grid-cols-4 gap-x-2",
  };
  return (
    <div
      className={`p-2 flex-1 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 ${gridObj[grid]} gap-y-4 b-red-500`}
    >
      {products.map((product) => (
        <div
          key={product.name}
          className="flex flex-col p-4 gap-4 border border-gray-600 rounded-lg "
        >
          <div
            className={`${
              +grid === 2 ? "h-[300px]" : "h-[200px]"
            }  bg-gray-500 rounded-md`}
          ></div>

          {/* Link in future */}
          <h2 className={`flex-1 ${+grid < 4 && "text-xl"}`}>{product.name}</h2>
          {/* PRICES */}
          <div className="space-y-4">
            <div className={`flex gap-8 flex-1 ${+grid < 4 && "text-xl"}`}>
              <span className="font-semibold text-lg tracking-wider">
                ${product.price}
              </span>
              <span className="font-semibold text-lg tracking-wider line-through">
                {product.discount && "$"}
                {product.discount}
              </span>
            </div>

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
