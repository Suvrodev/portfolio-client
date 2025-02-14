import { TResume } from "@/utils/types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface TAuthState {
  resume: null | TResume;
}

// Define the initial state using that type
const initialState: TAuthState = {
  resume: null,
};

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setResumeData: (state, action) => {
      const getResume: TResume = action.payload;
      console.log("get Resume: ", getResume);
      state.resume = getResume;
    },
  },
});

export const { setResumeData } = resumeSlice.actions;
export default resumeSlice.reducer;
