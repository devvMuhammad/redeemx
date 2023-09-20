import { Button } from "@/components/ui/button";
// import { productData } from "../featured/FeaturedData";

async function getProducts() {
  const response = await fetch("http://localhost:3000/api/products");
  return response.json();
}

export default async function ProductsMain({ grid = 4 }) {
  const { data: products } = await getProducts();
  const gridObj = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  };
  return (
    <div
      className={`p-2 flex-1 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 ${gridObj[grid]} gap-y-4 gap-x-2 b-red-500`}
    >
      {products.map((_, i) => (
        <div
          key={i}
          className="flex flex-col p-4 gap-4 border border-gray-600 rounded-lg "
        >
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
