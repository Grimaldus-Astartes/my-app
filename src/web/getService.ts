import axios, { AxiosResponse } from "axios";
import {
  baseURL,
  celularesURI,
  computadorasURI,
  impresoraURI,
  usuarioURI,
  catalogosURI,
} from "../utils/Const";

import {
  CelularType,
  ComputadoraType,
  ImpresoraType,
  UsuarioType,
  CatalogValue,
} from "../state/types";

const axiosInstance = axios.create({
  baseURL,
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

async function getData<T>(uri: string): Promise<AxiosResponse<T>> {
  const response = await axiosInstance.get<T>(uri);
  return response;
}

export const getCelulares = () => getData<CelularType>(celularesURI);
export const getComputadoras = () => getData<ComputadoraType[] | ComputadoraType>(computadorasURI);
export const getImpresoras = () => getData<ImpresoraType>(impresoraURI);
export const getUsuario = () => getData<UsuarioType>(usuarioURI);
export const getCatalogos = () => getData<CatalogValue>(catalogosURI);
