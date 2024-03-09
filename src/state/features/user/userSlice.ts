import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

import { UserIdentity, UserToken } from "../../../models";

interface UserState {
  value: UserIdentity;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  value: {
    userId: "",
    email: "",
    firstName: "",
    token: "",
    refreshToken: "",
  },
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user-identity",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<UserToken>) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const decodedToken = jwtDecode(action.payload.token) as any;

      state.value = {
        userId: decodedToken["uid"],
        email: decodedToken["email"],
        firstName: decodedToken["name"],
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
      };
      state.isLoggedIn = true;
    },
    logout(state) {
      state.value = { ...initialState.value };
      state.isLoggedIn = false;
    },
  },
});

export const { logout, loginSuccess } = userSlice.actions;

export default userSlice.reducer;
