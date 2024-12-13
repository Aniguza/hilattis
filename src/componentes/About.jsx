import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import "../assets/css/about.css";

export const About = () => {
  return (
    <body className="relative min-h-screen">
      <Navbar />
      <section className="persona-creadora">
        <div className="persona-creadora-icono"></div>
        <h1 className="persona-creadora-titulo">Persona creadora</h1>
        <p className="persona-creadora-descripcion">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <section className="como-empezamos">
        <div className="como-empezamos-texto">
          <h2 className="como-empezamos-titulo">¿Cómo empezamos?</h2>
          <p className="como-empezamos-parrafo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="como-empezamos-parrafo">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="como-empezamos-video"></div>
      </section>

      <section className="mision-vision">
        <div className="mision">
          <h2 className="mision-titulo">Misión</h2>
          <p className="mision-descripcion">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="vision">
          <h2 className="vision-titulo">Visión</h2>
          <p className="vision-descripcion">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
      <Footer />
    </body>
  );
};
