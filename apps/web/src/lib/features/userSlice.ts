import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface UserState {
  id: number;
  name: string;
  email: string;
  isVerified: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
  id: 0,
  name: "",
  email: "",
  isVerified: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isVerified = action.payload.isVerified;
    },
    logoutAction: (state) => {
      (state.id = 0),
        (state.name = ""),
        (state.email = ""),
        (state.isVerified = false);
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;

export default userSlice.reducer;
