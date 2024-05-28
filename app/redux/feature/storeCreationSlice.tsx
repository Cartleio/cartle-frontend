"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  creating: false,
  created: false,
  isCreateStoreActive: false,
  error: null,
};

export const storeCreationSlice = createSlice({
  name: "storeCreation",
  initialState,
  reducers: {
    startCreation: (state) => {
      state.creating = true;
      state.created = false;
      state.error = null;
    },
    IsCreateStoreActive: (state) => {
      state.isCreateStoreActive = !state.isCreateStoreActive;
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

export const {
  startCreation,
  creationSuccess,
  creationFailure,
  IsCreateStoreActive,
} = storeCreationSlice.actions;
export default storeCreationSlice.reducer;
