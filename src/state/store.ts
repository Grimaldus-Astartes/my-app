import { configureStore } from "@reduxjs/toolkit";
import celularReducer from './celularSlice'
import catalogoSlice from './catalogoSlice'

export const store = configureStore({
  reducer: {
    celular: celularReducer,
    catalogo: catalogoSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
