"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getStoreDetails: any = createAsyncThunk(
  "store/getStoreDetails",
  async (_, thunkAPI) => {
    try {
      const currentState: any = thunkAPI.getState();
      const { activeStoreId } = currentState?.merchantData;
      const { token } = currentState?.auth.user;
      const url = `https://cartle-test-1.onrender.com//stores/${activeStoreId}`;
      const resp = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return resp.data.store;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const initialState = {
  settingsModal: false,
  storeDetails: null,
  storeData: false,
  isLoading: false,
  deleteStore: false,
};

export const settingsControlSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleSettings: (state) => {
      state.settingsModal = !state.settingsModal;
    },
    toggleDelete: (state) => {
      state.deleteStore = !state.deleteStore;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStoreDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStoreDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.storeDetails = action.payload;
        state.storeData = true;
      })
      .addCase(getStoreDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.storeData = false;
      });
  },
});

export const { toggleSettings, toggleDelete } = settingsControlSlice.actions;
export default settingsControlSlice.reducer;
