// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // This array will store the cart items
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload); // Add the item to the cart
    },
    removeItem(state, action) {
      console.log({ state });
      // Filter out the item with the provided id

      state.items = state.items.filter(
        (item) => item.skuId !== action.payload.skuId
      );
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
