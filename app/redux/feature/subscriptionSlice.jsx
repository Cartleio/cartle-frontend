"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subModal: false,
  temporaryId: null,
};

export const subscriptionSlice = createSlice({
  name: "subscriptionPlan",
  initialState,
  reducers: {
    wantToSubscribe: (state, action) => {
      state.subModal = true;
      state.temporaryId = action.payload;
    },
    closeSubModal: (state) => {
      state.subModal = false;
      state.temporaryId = null;
    },
  },
});

export const { wantToSubscribe, closeSubModal } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
