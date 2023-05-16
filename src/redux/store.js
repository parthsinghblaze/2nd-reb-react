import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import profileSlice from "./profileSlice";
import productSlice from "./productSlice";
import apiProductSlice from "./apiProduct";

const store = configureStore({
  reducer: {
    counter : counterSlice,
    profile: profileSlice,
    product: productSlice,
    apiProduct: apiProductSlice
  },
});

export default store