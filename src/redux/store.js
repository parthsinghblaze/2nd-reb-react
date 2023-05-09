import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import profileSlice from "./profileSlice";

const store = configureStore({
  reducer: {
    counter : counterSlice,
    profile: profileSlice
  },
});

export default store