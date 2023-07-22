import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import Catalog, { CatalogValue, EnumRequestStatus } from "./types";
import { getCatalogos } from "../web/getService";

const initialState: Catalog = {
  data: [],
  status: EnumRequestStatus.IDLE,
  error: null,
};

export const fetchCatalogs = createAsyncThunk(
  "catalogo/fetchCatalogos",
  async () => {
    try {
      const response = await getCatalogos();
      return response.data;
    } catch (err) {
      return err;
    }
  }
);

const catalogoSlice = createSlice({
  name: "catalogo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCatalogs.pending, (state, action) => {
        state.status = EnumRequestStatus.LOADING;
      })
      .addCase(
        fetchCatalogs.fulfilled,
        (state, action ) => {
          
          state.status = EnumRequestStatus.SUCCEEDED;
          state.data = action.payload as CatalogValue[];
        }
      )
      .addCase(fetchCatalogs.rejected, (state, action) => {
        state.status = EnumRequestStatus.FAILED;
        state.error = action.error.message;
      });
  },
});
//Actions

//Selectors
export const selectCatalogos = (state: RootState) => state.catalogo.data;
export const selectCatalogStatus = (state: RootState) => state.catalogo.status
//Reducer
export default catalogoSlice.reducer;
