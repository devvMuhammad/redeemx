import { toCamelCase, toTitleCase } from "@/lib/utils";
import categories from "@/components/nav/categories";
import Products from "@/components/products/Products";

// export async function generateStaticParams() {
//   return categories.map((category) => ({
//     category: toCamelCase(category.title),
//   }));
// }

export default async function Category({ params: { category }, searchParams }) {
  // const titledCategory = toTitleCase(category);
  return <Products searchParams={searchParams} category={category} />;
}
