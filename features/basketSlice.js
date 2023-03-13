import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    AddToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
      console.log(state.items);
    },
    RemoveFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove product with id ${action.payload.id}`);
      }
      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddToBasket, RemoveFromBasket } = BasketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id == id);

export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);



export default BasketSlice.reducer;
