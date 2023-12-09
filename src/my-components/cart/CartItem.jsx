import { Trash2Icon } from "lucide-react";

export default function CartItem({
  item: { name, brand, price, id, totalPrice, quantity },
}) {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[75px_1fr] gap-x-4 gap-y-0 border-b-2 border-solid border-gray-500 pb-2 last:border-b-0">
      <div className="bg-purple-500 aspect-square"></div>
      <div className="flex flex-col">
        {/* TYPE AND PRODUCT NAME */}
        <p className="text-md uppercase text-gray-500">Gift Card</p>
        <p className=" text-sm font-bold ">{name}</p>
        {/* ID AND BRAND */}
        <div className="flex justify-between  w-full mt-4">
          <div className="flex gap-2 text-sm">
            <p className="text-gray-500">ID:</p>
            <p className="font-bold">#42A182</p>
          </div>
          <div className="flex gap-2 text-sm">
            <p className="text-gray-500">Brand:</p>
            <p className="font-bold">{brand}</p>
          </div>
          {/* CART BUTTONS */}
        </div>
      </div>
      <div className="col-span-2 flex justify-between items-center mt-4">
        <div className="flex gap-2">
          <div className="flex rounded-[0.25rem] border-2 border-solid border-white">
            <button className="border-r-2 border-solid border-white px-3 text-lg font-bold hover:bg-white hover:text-black cursor-pointer">
              -
            </button>

            <button className=" px-3 text-lg font-bold  hover:bg-white hover:text-black cursor-pointer">
              +
            </button>
          </div>
          <span className="border-2 border-solid border-white p-[3px] rounded-[0.25rem] hover:text-white hover:border-red-500 hover:bg-red-500 cursor-pointer">
            <Trash2Icon />
          </span>
        </div>
        <div className="flex items-center gap-2 text-[1rem]">
          <p>
            {quantity} x ${price}
          </p>
          <p className="font-bold">= ${totalPrice}</p>
        </div>
      </div>
    </div>
  );
}
