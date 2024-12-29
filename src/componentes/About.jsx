import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import "../assets/css/about.css";
import { useFetch } from "./apiService";

export const About = () => {
  const { data, loading, error } = useFetch(
    "https://web-production-4880.up.railway.app/empresas/"
  );

  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <body className="relative min-h-screen">
      <Navbar />
      <section className="persona-creadora">
        <div className="persona-creadora-icono"></div>
        <h1 className="persona-creadora-titulo">
          {loading
            ? "Cargando..."
            : error
            ? `Error: ${error}`
            : data && data.length > 0
            ? data[0].fundadora
            : "No se encontró información"}
        </h1>
        <p className="persona-creadora-descripcion">
        {loading
            ? "Cargando..."
            : error
            ? `Error: ${error}`
            : data && data.length > 0
            ? data[0].palabras_fundadora
            : "No se encontró información"}
        </p>
      </section>

      <section className="como-empezamos">
        <div className="como-empezamos-texto">
          <h2 className="como-empezamos-titulo">¿Cómo empezamos?</h2>
          <p className="como-empezamos-parrafo">
          {loading
            ? "Cargando..."
            : error
            ? `Error: ${error}`
            : data && data.length > 0
            ? data[0].resena
            : "No se encontró información"}
          </p>
        </div>
        <div className="como-empezamos-video"></div>
      </section>

      <section className="mision-vision">
        <div className="mision">
          <h2 className="mision-titulo">Misión</h2>
          <p className="mision-descripcion">
          {loading
            ? "Cargando..."
            : error
            ? `Error: ${error}`
            : data && data.length > 0
            ? data[0].mision
            : "No se encontró información"}
          </p>
        </div>
        <div className="vision">
          <h2 className="vision-titulo">Visión</h2>
          <p className="vision-descripcion">
          {loading
            ? "Cargando..."
            : error
            ? `Error: ${error}`
            : data && data.length > 0
            ? data[0].vision
            : "No se encontró información"}
          </p>
        </div>
      </section>
      <Footer />
    </body>
  );
};
