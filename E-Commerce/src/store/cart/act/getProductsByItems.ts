import { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import axios from "axios";
type TResponse = TProduct[];

const actGetProductsByItems = createAsyncThunk(
  "cart/actGetProductsByItems",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const { cartRdc } = getState() as RootState;
    const itemsId = Object.keys(cartRdc.items);
    //const itemsId = [...new Set(Object.keys(cartRdc.items))];
    if (!itemsId.length) {
      return fulfillWithValue([]);
    }
    try {
      const concatenatedItemId = itemsId.map((el) => `id=${el}`).join("&");
      const res = await axios.get<TResponse>(`/products?${concatenatedItemId}`);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);

export default actGetProductsByItems;
