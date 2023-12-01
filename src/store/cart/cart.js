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
  initialState,
  reducers: {
    addItem: (state, action) => {
      // payload = item to add
      const item = state.items.find((item) => item.id === action.payload.id);
      if (!item)
        return state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      // else increment quantity by 1 and update totalPrice
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
  },
});

export default cartSlice.reducer;
export const { addItem } = cartSlice.actions;
