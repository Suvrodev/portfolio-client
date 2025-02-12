import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./apis/BaseApi/baseApi";
import resumeReducer from "./features/resumeSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
    user: userSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
