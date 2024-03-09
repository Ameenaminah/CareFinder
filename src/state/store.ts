import { configureStore } from "@reduxjs/toolkit";
import hospitalSlice from "./features/hospital/hospitalSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    hospital: hospitalSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
