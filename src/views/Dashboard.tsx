import React from "react";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { CelularState } from "../state/celularSlice";

import { TabView, TabPanel } from "primereact/tabview";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";


interface ColumnMeta {
  field: string;
  header: string;
}

const Dashboard = () => {
  const products: CelularState[] = useAppSelector(state => state.celular)
  const columns: ColumnMeta[] = [
    { field: "empresa", header: "Empresa" },
    { field: "telefono", header: "Telefono" },
    { field: "usuario", header: "Usuario" },
  ];
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
            <DataTable value={products}>
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
            <DataTable value={products}>
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
