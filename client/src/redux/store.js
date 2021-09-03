import { configureStore } from "@reduxjs/toolkit";
import tickersReducer from "./reducer";

const store = configureStore({
  reducer: {
    tickers: tickersReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
