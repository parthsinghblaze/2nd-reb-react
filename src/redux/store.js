import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import profileSlice from "./profileSlice";
import productSlice from "./productSlice";
import apiProductSlice from "./apiProduct";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    counter : counterSlice,
    profile: profileSlice,
    product: productSlice,
    apiProduct: apiProductSlice,
    auth: authSlice
  },
});

export default store