"use client";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { store } from "../store";
import axios from "axios";

export const getVouchers = createAsyncThunk(
  "vouchers/getVouchers",
  async (_, thunkAPI) => {
    try {
      const currentState: any = thunkAPI.getState();
      const { token } = currentState?.auth.user;
      const { activeStoreId } = currentState?.merchantData;

      const url = `https://cartle-backend-800v.onrender.com/stores/${activeStoreId}/vouchers`;
      const resp = await axios.get(url, {
        headers: {
          withCredentials: true,
          Authorization: `Bearer ${token}`,
        },
      });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

interface Product {
  vouchers: any;
  isLoading: boolean;
  voucher: any;
}

const initialState: Product = {
  vouchers: [],
  isLoading: false,
  voucher: null,
};

export const vouchersSlice = createSlice({
  name: "voucher",
  initialState,
  reducers: {
    addVouchers: (state, action) => {
      state.vouchers.push(action.payload);
    },
    addVoucher: (state, action) => {
      state.voucher = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVouchers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVouchers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.vouchers = action.payload;
      })
      .addCase(getVouchers.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { addVouchers, addVoucher } = vouchersSlice.actions;
export default vouchersSlice.reducer;
