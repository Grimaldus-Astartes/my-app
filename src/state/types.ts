export type CatalogValue = {
  idCatalogValue: number;
  idCatalog: string;
  value: string;
};

export enum EnumRequestStatus {
  IDLE = "idle",
  LOADING = "loading",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

export default interface Catalog {
  data: CatalogValue[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
};
