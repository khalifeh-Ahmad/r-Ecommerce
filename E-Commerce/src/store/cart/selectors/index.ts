import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

const getCartTotalQtySelector = createSelector(
  (state: RootState) => state.cartRdc.items,
  (items) => {
    console.log("fire");
    return Object.values(items).reduce((acc, qty) => acc + qty, 0);
  }
);

export { getCartTotalQtySelector };
