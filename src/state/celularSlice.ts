import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { CelularType } from "./types";



const initialState: CelularType[] = [
  {
    idFormCelular: 3,
    idEmpresa: {
      idCatalogValue: 5,
      idCatalog: "empresa",
      value: "IBM",
    },
    idTelefonoAsignado: {
      idCatalogValue: 31,
      idCatalog: "telefono",
      value: "111 111 1111",
    },
    nombreUsuario: "PEDRO",
    idRegion: {
      idCatalogValue: 20,
      idCatalog: "region",
      value: "norte",
    },
    idLocalidad: {
      idCatalogValue: 17,
      idCatalog: "localidad",
      value: "las palmas",
    },
    idArea: {
      idCatalogValue: 12,
      idCatalog: "area",
      value: "Ventas",
    },
    idEquipo: {
      idCatalogValue: 25,
      idCatalog: "equipo",
      value: "Zenbook",
    },
    modelo: "14",
  },
];

const celularSlice = createSlice({
  name: "celular",
  initialState,
  reducers: {
    loadCelulares: (state, action) => {
      state = action.payload;
    },
  },
});

export const { loadCelulares } = celularSlice.actions;
export const selectCelular = (state: RootState) =>
  state.celular.map((celular) => ({
    idFormCelular: celular.idFormCelular,
    empresa: celular.idEmpresa.value,
    telefono: celular.idTelefonoAsignado.value,
    region: celular.idRegion.value,
    localidad: celular.idLocalidad.value,
    area: celular.idArea.value,
  }));

export default celularSlice.reducer;
