"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  creating: false,
  created: false,
  error: null,
};

export const productCreationSlice = createSlice({
  name: "productCreation",
  initialState,
  reducers: {
    startCreation: (state) => {
      state.creating = true;
      state.created = false;
      state.error = null;
    },
    creationSuccess: (state) => {
      state.creating = false;
      state.created = true;
    },
    creationFailure: (state, action) => {
      state.creating = false;
      state.created = false;
      state.error = action.payload;
    },
  },
});

export const { startCreation, creationSuccess, creationFailure } =
  productCreationSlice.actions;
export default productCreationSlice.reducer;
