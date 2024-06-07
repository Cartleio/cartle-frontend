"use client";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { store } from "../store";
import axios from "axios";

export const getCustomers = createAsyncThunk(
  "products/getCustomers",
  async (_, thunkAPI) => {
    try {
      const currentState: any = thunkAPI.getState();
      const { token } = currentState?.auth.user;
      const { activeStoreId } = currentState?.merchantData;
      const url = `https://cartle-test.onrender.com/stores/${activeStoreId}/customers`;
      const resp = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(resp.data.Customers);
      return resp.data.Customers;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

interface Customer {
  customers: any[];
  isLoading: boolean;
  customer: any;
}

const initialState: Customer = {
  customers: [],
  isLoading: false,
  customer: null,
};

export const customersSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomers: (state, action) => {
      state.customers.push(action.payload);
    },
    addCustomer: (state, action) => {
      state.customer = action.payload;
    },
  },

  //ASYNC THUNK
  extraReducers: (builder) => {
    builder
      .addCase(getCustomers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCustomers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.customers = action.payload;
      })
      .addCase(getCustomers.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default customersSlice.reducer;
