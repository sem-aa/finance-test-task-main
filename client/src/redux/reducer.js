import { createReducer } from "@reduxjs/toolkit";
import { fetchTickers } from "./actions";

const tickersReducer = createReducer([], {
  [fetchTickers]: (state, { payload }) => {
    return state.length >= 10
      ? [...state.slice(state.length - 9)]
      : [...state, payload];
  },
});

export default tickersReducer;
