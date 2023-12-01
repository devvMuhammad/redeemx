import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cart";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
