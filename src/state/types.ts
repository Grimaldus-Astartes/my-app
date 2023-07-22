export type CatalogValue = {
  idCatalogValue: number;
  idCatalog: string;
  value: string;
};

export interface BasicType {
  idEmpresa: CatalogValue;
  idTelefonoAsignado: CatalogValue;
  nombreUsuario: string;
  idRegion: CatalogValue;
  idLocalidad: CatalogValue;
  idArea: CatalogValue;
  idEquipo: CatalogValue;
  modelo?: string;
}

export default interface Catalog {
  data: CatalogValue[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null;
}

export enum EnumRequestStatus {
  IDLE = "idle",
  LOADING = "loading",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

export interface CelularType extends BasicType {
  idFormCelular: number;
}

export interface ComputadoraType extends BasicType {
  idComputadoraForm: number;
}

export interface ImpresoraType extends BasicType {
  idImpresoraForm: number;
}

export interface UsuarioType {
  idUsuario: number;
  nombreUsuario: string;
  password: string;
  correo: string;
}
