import { Tuser } from "@/utils/types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface TAuthState {
  user: null | Tuser;
}

// Define the initial state using that type
const initialState: TAuthState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const getUser: Tuser = action.payload;
      console.log("Get user: ", getUser);
      state.user = getUser;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
