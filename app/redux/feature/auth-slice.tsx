"use client";
import { createSlice } from "@reduxjs/toolkit";

const getUserFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    return user;
  }
  return null;
};
type User = {
  user: User | null;
  loading: boolean;
  subscriptionPlanId: string | null | number;
  subModal: boolean;
};

const initialState: User = {
  user: getUserFromLocalStorage(),
  loading: false,
  subscriptionPlanId: null,
  subModal: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const user = { ...action.payload.merchant, token: action.payload.token };
      state.user = user;
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(user));
      }
    },
    logout: (state) => {
      state.user = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }

      state.loading = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
