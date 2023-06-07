import { configureStore } from "@reduxjs/toolkit";
import celularReducer from './celularSlice'

export const store = configureStore({
  reducer: {
    celular: celularReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
