import { Button } from "@/components/ui/button";
import Product from "./Product";

export default function ProductsMain({ grid, products }) {
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
        <Product key={product.name} product={product} grid={grid} />
      ))}
    </div>
  );
}
