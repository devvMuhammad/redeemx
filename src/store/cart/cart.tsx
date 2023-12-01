import { create } from "zustand";

type CartItem = {
  id: Number;
  name: String;
  price: Number;
  quantity: Number;
  brand: String;
  category: String;
};

type Cart = {
  items: CartItem[];
  totalQuantity: Number;
  totalPrice: Number;
};

type CartStore = {
  cart: Cart;
  // addItem:() => void;
};
export const useCart = create<CartStore>((set) => ({
  cart: {
    items: [
      {
        id: 0,
        name: "",
        price: 0,
        quantity: 0,
        brand: "",
        category: "",
      },
    ],
    totalQuantity: 0,
    totalPrice: 0,
  },
  // addItem:() => set(
}));
