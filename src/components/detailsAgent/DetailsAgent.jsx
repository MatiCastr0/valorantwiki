import { useState } from "react";
import { CardAgent } from "./CardAgent";
import { Header } from "../navbar/Header";
import { useLocation } from "react-router-dom";



export const DetailsAgent = (datosPersonaje) => {
  const location = useLocation();
  const datosAgente = location.state.datosPersonaje;
  return (
    <>
      <Header></Header>

      <div className=" container mx-auto bg-[url('')]">
        <h1 className="py-14 text-center text-xl">Detalles del Agente</h1>
        <p> {datosAgente.displayName}</p>
        <CardAgent imgAgente={datosAgente.fullPortrait}></CardAgent>
      </div>
    </>
  );
};
