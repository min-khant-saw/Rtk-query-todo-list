import { configureStore, createSelector, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "number",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
  },
});

const count = (state) => state;
const countPlus = (state) => state;

const select = createSelector([count], (c) => c);

export const selector = createSelector(
  [select, countPlus],
  (s, num) => s + num + 10
);

const store = configureStore({
  reducer: slice.reducer,
});

export default store;
