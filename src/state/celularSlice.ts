import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface CelularState {
  usuario: string;
  empresa: number;
  telefono: number;
}

const initialState: CelularState[] = [
  { usuario: "JONACITO", empresa: 0, telefono: 0 },
];

const celularSlice = createSlice({
  name: "celular",
  initialState,
  reducers: {
    setEmpresa: (state) => {},
  },
});

export const { setEmpresa } = celularSlice.actions;
export const selectCelular = (state: RootState) => state.celular;

export default celularSlice.reducer;
