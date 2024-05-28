"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email_overlay: false,
  discount_overlay: false,
};

const overlaySlice = createSlice({
  name: "overlay",
  initialState,
  reducers: {
    openEmailOverlay: (state) => {
      state.email_overlay = true;
    },
    closeEmailOverlay: (state) => {
      state.email_overlay = false;
    },
    openDiscountOverlay: (state) => {
      state.discount_overlay = true;
    },
    closeDiscountOverlay: (state) => {
      state.discount_overlay = false;
    },
  },
});

export const {
  openEmailOverlay,
  closeEmailOverlay,
  openDiscountOverlay,
  closeDiscountOverlay,
} = overlaySlice.actions;

export default overlaySlice.reducer;
