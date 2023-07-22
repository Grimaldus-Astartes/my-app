import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../state/hooks";
 import { selectCelular } from "../state/celularSlice";
import { getComputadoras } from "../web/getService";
import { CatalogValue, ComputadoraType } from "../state/types";

import { TabView, TabPanel } from "primereact/tabview";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

enum Field {
  empresa = "empresa",
  telefono = "telefono",
  region = "region",
  localidad = "localidad",
  area = "area",
}

interface ColumnMeta {
  field: Field;
  header: string;
}

interface CelularData {
  idFormCelular: number;
  empresa: string;
  telefono: string;
  region: string;
  localidad: string;
  area: string;
}

type Product = {
  idEmpresa: string;
  nombreUsuario: string
  idTelefonoAsignado: CatalogValue
  idRegion: CatalogValue
}

const Dashboard = () => {
   let products = useAppSelector(selectCelular);
  const columns: ColumnMeta[] = [
    { field: Field.empresa, header: "Empresa" },
    { field: Field.telefono, header: "Telefono" },
    { field: Field.region, header: "Region" },
    { field: Field.localidad, header: "Localidad" },
    { field: Field.area, header: "Area" },
  ];
  const [computers, setComputers] = useState<ComputadoraType[] | ComputadoraType>([]);
  

  useEffect(() => {
    getComputadoras().then(req => setComputers(req.data)
    )
  }, [products]);
  
  return (
    <Card className="min-w-min max-w-full w-10">
      <div className="w-12">
        <TabView>
          <TabPanel header="Equipo de Computo">
            <div>
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Keyword Search" />
              </span>
            </div>
            <DataTable value={products}>
              {columns.map((col, i) => (
                <Column key={col.field} field={col.field} header={col.header} />
              ))}
              <Column key={"equipo-computo"} body={<Button label="Ver" />} />
            </DataTable>
          </TabPanel>
          <TabPanel header="Impresoras">
            <div>
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Keyword Search" />
              </span>
            </div>
            <DataTable value={[]}>
              {columns.map((col, i) => (
                <Column key={col.field} field={col.field} header={col.header} />
              ))}
              <Column key={"equipo-computo"} body={<Button label="Ver" />} />
            </DataTable>
          </TabPanel>
          <TabPanel header="Celulares">
            <div>
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Keyword Search" />
              </span>
            </div>
            <DataTable value={[]}>
              {columns.map((col, i) => (
                <Column key={col.field} field={col.field} header={col.header} />
              ))}
              <Column key={"equipo-computo"} body={<Button label="Ver" />} />
            </DataTable>
          </TabPanel>
        </TabView>
      </div>
    </Card>
  );
};

export default Dashboard;
