import Product from "./Product";

export default function ProductsMain({ grid, products }) {
  return (
    <div
      className={`p-2 flex-1 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-y-4 b-red-500`}
    >
      {products.map((product) => (
        <Product key={product.name} product={product} grid={grid} />
      ))}
    </div>
  );
}
