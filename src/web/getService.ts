import axios from "axios";
import { baseUrl, celularesURI } from "../utils/Const";
import { CelularState } from "../state/celularSlice";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export const getCelulares = async () => {
  const celulares = await axiosInstance.get(celularesURI)
  return celulares;
};
