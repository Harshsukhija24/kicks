import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteropen: true,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggle(state) {
      state.filteropen = !state.filteropen;
    },
    classfilter(state) {
      state.filteropen = false;
    },
  },
});

export const { toggle, classfilter } = filterSlice.actions;

export default filterSlice.reducer;
