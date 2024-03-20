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
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.skuId === newItem.skuId
      );

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, increase its quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // Otherwise, add the item to the cart with quantity 1
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const skuIdToRemove = action.payload.skuId;
      const existingItemIndex = state.items.findIndex(
        (item) => item.skuId === skuIdToRemove
      );

      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        if (existingItem.quantity > 1) {
          // If the item quantity is greater than 1, decrement it
          state.items[existingItemIndex].quantity -= 1;
        } else {
          // If the item quantity is 1, remove the item from the cart
          state.items.splice(existingItemIndex, 1);
        }
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
