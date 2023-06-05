import React from "react";

import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from 'primereact/button';

export default function Form() {
  return (
    <Card
      className="flex flex-column min-w-min max-w-full w-10"
      title="Formulario Equipo de Computo"
    >
      <div className="flex flex-row gap-2 w-full">
        <div className="flex flex-column gap-2 w-6">
          <label htmlFor="">Empresa</label>
          <Dropdown />
        </div>
        <div className="flex flex-column gap-2 w-6">
          <label htmlFor="">Número Asignado</label>
          <Dropdown />
        </div>
      </div>
      <div className="flex flex-row gap-2 w-full mt-5">
        <div className="flex flex-column gap-2 w-6">
          <label htmlFor="nombreUsuario">Nombre completo de usuario</label>
          <InputText />
        </div>
        <div className="flex flex-column gap-2 w-6">
          <label htmlFor="nombreUsuario">Región</label>
          <Dropdown />
        </div>
      </div>
      <div className="flex flex-row w-full gap-2 mt-5">
        <div className="flex flex-column gap-2 w-6">
          <label htmlFor="">Localidad</label>
          <Dropdown />
        </div>
        <div className="flex flex-column gap-2 w-6">
          <label htmlFor="">Area</label>
          <Dropdown />
        </div>
      </div>
      <div className="flex flex-row gap-2 w-full mt-5">
        <div className="flex flex-column gap-2 w-6">
          <label htmlFor="">Eqipo</label>
          <Dropdown/>
        </div>
        <div className="flex flex-column gap-2 w-6">
        <label htmlFor="">Modelo</label>
          <InputText placeholder="Search" />
        </div>
      </div>
      <div className="flex flex-row justify-content-between gap-2 w-full mt-5">
        <Button label="Guardar" severity="success" icon="pi pi-check"/>
        <Button label="Limpiar" severity="danger" icon="pi pi-trash"/>
      </div>
    </Card>
  );
}
