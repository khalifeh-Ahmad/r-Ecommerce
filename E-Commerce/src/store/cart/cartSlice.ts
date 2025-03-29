import { TProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";

interface ICartState {
  item: { [key: number]: number };
  productFullInfo: TProduct[];
}

const initialState: ICartState = {
  item: {}, // this is to get the product Id and the quantity,then we send Id to server in order to get the latest version of data (like price)
  productFullInfo: [],
};
const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
