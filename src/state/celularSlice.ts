import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type CatalogValue = {
  idCatalogValue: number;
  idCatalog: string;
  value: string;
};

export interface CelularState {
  idFormCelular: number;
  idEmpresa: CatalogValue;
  idTelefonoAsignado: CatalogValue;
  nombreUsuario: string;
  idRegion: CatalogValue;
  idLocalidad: CatalogValue;
  idArea: CatalogValue;
  idEquipo: CatalogValue;
  modelo: string;
}

const initialState: CelularState[] = [
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
