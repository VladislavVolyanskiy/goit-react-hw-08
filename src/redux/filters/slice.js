import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilterText(state, { payload }) {
      state.name = payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { changeFilterText } = filtersSlice.actions;


