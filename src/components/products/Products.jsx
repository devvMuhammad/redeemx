import ProductsFooter from "./ProductsFooter";
import ProductsHeader from "./ProductsHeader";
import ProductsMain from "./ProductsMain";
import { getProducts } from "../../../db/queries/getProducts";

export default async function Products({ searchParams, category }) {
  const { grid = 4, brand, sort, perPage, page, price } = searchParams;

  const { products, total, length } = await getProducts({
    category,
    brand,
    sort,
    page,
    perPage,
    price,
  });
  return (
    <div className="flex flex-col bg-sy-500">
      <ProductsHeader length={length} total={total} />
      {length ? (
        <ProductsMain grid={grid} products={products} />
      ) : (
        <div className="h-[60vh] flex items-center justify-center text-center text-xl md:text-3xl font-bold tracking-wider">
          No items shown!
        </div>
      )}
      <ProductsFooter total={total || 1} />
    </div>
  );
}
