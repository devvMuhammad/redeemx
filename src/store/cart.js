import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: "",
      name: "",
      price: 0,
      quantity: 0,
      brand: "",
      category: "",
      totalPrice: 0,
    },
  ],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.totalQuantity++;
      // payload = item to add, add item to items;
      const item = state.items.find((item) => item.id === action.payload.id);
      if (!item)
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      // else increment quantity by 1 and update totalPrice
      else {
        item.quantity++;
        item.totalPrice = item.quantity * item.price;
      }
    },
    removeItem: (state, action) => {
      state.totalQuantity--;
      // payload = item to add

      // find the item first
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item.quantity > 1) {
        item.quantity--;
        item.totalPrice -= item.price;
      } else {
        // filter the items list
        state.items = state.items.filter((elm) => elm !== item);
      }
    },
    deleteItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      state.items = state.items.filter((elm) => elm !== item);
      state.totalQuantity -= item.quantity;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, deleteItem } = cartSlice.actions;
