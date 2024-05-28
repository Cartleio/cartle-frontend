"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProfile: any = createAsyncThunk(
  "profile/getProfile",
  async (_, thunkAPI) => {
    const currentState: any = thunkAPI.getState();
    const { token } = currentState?.auth.user;
    try {
      const url = `https://cartle-backend-800v.onrender.com/merchant/profile`;
      const resp = await axios.get(url, {
        headers: {
          withCredentials: true,
          Authorization: `Bearer ${token}`,
        },
      });
      return resp.data.merchant;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const initialState = {
  profile: null,
  isLoading: false,
  failed: false,
};

export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.failed = false;
        state.profile = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.failed = true;
      });
  },
});

// export const { toggleSettings } = settingsControlSlice.actions;
export default ProfileSlice.reducer;
