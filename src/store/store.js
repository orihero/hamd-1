import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice";
import kurierSlice from "./kurierSlice";
import profileSlice from "./profileSlice";

export const store = configureStore({
  reducer: {
    order: orderSlice,
    curier: kurierSlice,
    profile: profileSlice,
  },
});
