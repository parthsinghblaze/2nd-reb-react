import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import profileSlice from "./profileSlice";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: {
    counter : counterSlice,
    profile: profileSlice,
    product: productSlice
  },
});

export default store