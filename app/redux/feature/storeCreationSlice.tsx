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
    openStoreCreationOverlay: (state) => {
      state.isCreateStoreActive = true;
    },

    closeStoreCreationOverlay: (state) => {
      state.isCreateStoreActive = false;
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
  openStoreCreationOverlay,
  closeStoreCreationOverlay,
} = storeCreationSlice.actions;
export default storeCreationSlice.reducer;
