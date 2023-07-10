import axios from "axios";
import {
  baseURL,
  celularesURI,
  computadorasURI,
  impresoraURI,
  usuarioURI,
  catalogosURI,
} from "../utils/Const";

const axiosInstance = axios.create({
  baseURL,
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export const getCelulares = async () => {
  const celulares = await axiosInstance.get(celularesURI);
  return celulares;
};

export const getComputadoras = async () => {
  const computadoras = await axiosInstance.get(computadorasURI);
  return computadoras;
};

export const getImpresoras = async () => {
  const impresoras = await axiosInstance.get(impresoraURI);
  return impresoras;
};

export const getUsuario = async () => {
  const usuario = await axiosInstance.get(usuarioURI);
  return usuario;
};

export const getCatalogos = async () => {
  const catalogos = await axiosInstance.get(catalogosURI);
  return catalogos;
};
