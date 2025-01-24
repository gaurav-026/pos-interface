import { createSlice } from "@reduxjs/toolkit";

const storedCart = localStorage.getItem("cart");
const initialCart = storedCart ? JSON.parse(storedCart) : { items: [], totalPrice: 0 };

const initialState = {
  items: Array.isArray(initialCart.items) ? initialCart.items : [],
  totalPrice: initialCart.totalPrice || 0,
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart
    add: (state, action) => {
      state.items.push({ ...action.payload });
      state.totalPrice += action.payload.price;
      // Update local storage
      localStorage.setItem(
        "cart",
        JSON.stringify({ items: state.items, totalPrice: state.totalPrice })
      );
    },

    // Remove item from cart
    remove: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.name === action.payload.name
      );
      if (itemIndex !== -1) {
        state.totalPrice -= state.items[itemIndex].price;
        state.items.splice(itemIndex, 1);
        // Update local storage
        localStorage.setItem(
          "cart",
          JSON.stringify({ items: state.items, totalPrice: state.totalPrice })
        );
      }
    },
  },
});

export const { add, remove } = cartReducer.actions;
export default cartReducer.reducer;
