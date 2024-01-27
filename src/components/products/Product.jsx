import AddToCart from "./AddToCart";

export default function Product({
  product: { name, discount, price, brand },
  grid,
}) {
  return (
    <div
      key={name}
      className="flex flex-col p-4 gap-4 border border-gray-600 rounded-lg "
    >
      <div
        className={`${
          +grid === 2 ? "h-[300px]" : "h-[200px]"
        }  bg-gray-500 rounded-md`}
      ></div>

      {/* Link in future */}
      <h2 className={`flex-1 ${+grid < 4 && "text-xl"}`}>{name}</h2>
      {/* PRICES */}
      <div className="space-y-4">
        <div className={`flex gap-8 flex-1 ${+grid < 4 && "text-xl"}`}>
          <span className="font-semibold text-lg tracking-wider">${price}</span>
          <span className="font-semibold text-lg tracking-wider line-through">
            {discount && `$${discount + price}`}
          </span>
        </div>

        {/* Agar variant huwa to add kardena */}
        <AddToCart product={{ name, discount, price, brand }} />
      </div>
    </div>
  );
}
