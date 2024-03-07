import { toTitleCase } from "@/lib/utils";
import { getProducts } from "../../../../../db/queries/getProducts";
import ProductsHeader from "@/components/products/ProductsHeader";
import ProductsMain from "@/components/products/ProductsMain";
import ProductsFooter from "@/components/products/ProductsFooter";

export default async function BrandPage({ params, searchParams }) {
  // const { brand } = params;
  const { grid = 4, sort, perPage, page, price } = searchParams;
  console.log("this is the brand", toTitleCase(params.brand));
  const [category, brand] = params.brand.split("_"); //laptops-Apple to ["laptops", "Apple]
  const { products, total, length } = await getProducts({
    category,
    brand: toTitleCase(brand),
    sort,
    page,
    perPage,
    price,
  });
  console.log(products);
  return (
    <div className="flex flex-col bg-sy-500">
      <ProductsHeader
        length={length}
        total={total}
        category={category}
        page="brand"
      />
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
// export default function Po({ params, searchParams, category }) {
//   return <p>Hiii ${params.brand} </p>;
// }
