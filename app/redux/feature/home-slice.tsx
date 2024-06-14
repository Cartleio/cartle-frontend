import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  update1: 0,
  update2: 0,
  update3: 0,
  update4: 0,
  totalUpdates: 0,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setUpdate1: (state) => {
      if (state.update1 === 0) {
        state.update1 = 1;
      }
    },
    setUpdate2: (state) => {
      if (state.update2 === 0) {
        state.update2 = 1;
      }
    },
    setUpdate3: (state) => {
      if (state.update3 === 0) {
        state.update3 = 1;
      }
    },
    setUpdate4: (state) => {
      if (state.update4 === 0) {
        state.update4 = 1;
      }
    },

    setTotalUpdates: (state) => {
      state.totalUpdates =
        state.update1 + state.update2 + state.update3 + state.update4;
    },
  },
});

export const {
  setUpdate1,
  setUpdate2,
  setUpdate3,
  setUpdate4,
  setTotalUpdates,
} = homeSlice.actions;
export default homeSlice.reducer;
