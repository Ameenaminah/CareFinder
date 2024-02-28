import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./features/sidebar/sidebar";
import hospitalSlice from "./features/hospital/hospitalSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    hospital: hospitalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
