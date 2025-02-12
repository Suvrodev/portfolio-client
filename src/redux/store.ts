import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./apis/BaseApi/baseApi";
import resumeReducer from "./features/resumeSlice";

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
