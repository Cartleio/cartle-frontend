"use client";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the types for store and product
interface Store {
  id: string;
  name: string;
}

// Define the state type
interface MerchantDataState {
  stores: Store[];
  activeStoreId: number | string | null;
  isLoading: boolean;
  storeLoaded: boolean;
}

const url = "https://cartle-backend-800v.onrender.com/merchant/stores";

export const getStores = createAsyncThunk(
  "merchantData/getStores",
  async (_, thunkAPI) => {
    const currentState: any = thunkAPI.getState();
    const { token } = currentState?.auth.user;
    try {
      const resp = await axios.get(url, {
        headers: {
          withCredentials: true,
          Authorization: `Bearer ${token}`,
        },
      });
      return resp.data.stores;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const initialState: MerchantDataState = {
  stores: [],
  activeStoreId: null,
  isLoading: false,
  storeLoaded: false,
};

export const merchantDataSlice = createSlice({
  name: "merchantData",
  initialState,
  reducers: {
    addStore: (state, action: PayloadAction<Store>) => {
      state.stores.push(action.payload);
    },
    activeStore: (state, action) => {
      state.activeStoreId = action.payload;
    },
    clearStore: (state) => {
      state.activeStoreId = null;
      state.stores = [];
    },
    makeFirstActive: (state) => {
      state.activeStoreId = state.stores[0].id;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStores.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStores.fulfilled, (state, action) => {
        state.isLoading = false;
        state.storeLoaded = true;
        state.stores = action.payload;
        state.activeStoreId = state.activeStoreId
          ? state.activeStoreId
          : action.payload[0].id;
      })
      .addCase(getStores.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { addStore, activeStore, makeFirstActive, clearStore } =
  merchantDataSlice.actions;
export default merchantDataSlice.reducer;
