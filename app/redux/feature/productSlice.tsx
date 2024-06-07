"use client";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { store } from "../store";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const currentState: any = thunkAPI.getState();
      const { token } = currentState?.auth.user;
      const { activeStoreId } = currentState?.merchantData;
      const url = `https://cartle-test-1.onrender.com/stores/${activeStoreId}/products`;
      const resp = await axios.get(url, {
        headers: {
          withCredentials: true,
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(resp.data.products);
      return resp.data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

interface Product {
  products: any;
  isLoading: boolean;
  product: any;
}

const initialState: Product = {
  products: [],
  isLoading: false,
  product: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products.push(action.payload);
    },
    addProduct: (state, action) => {
      state.product = action.payload;
    },
  },

  //ASYNC THUNK
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { addProducts, addProduct } = productsSlice.actions;
export default productsSlice.reducer;
