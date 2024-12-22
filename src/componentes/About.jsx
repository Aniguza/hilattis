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
        <h1 className="persona-creadora-titulo">Soledad Carrasco</h1>
        <p className="persona-creadora-descripcion">
        Gerente y fundadora de Corporación Hilattis Kausay S.A.C.
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
          Proveer combustibles de origen vegetal, como carbón y leña de alta calidad, promoviendo prácticas sostenibles y generando empleo digno en las comunidades rurales, para satisfacer las necesidades de nuestros clientes y contribuir al cuidado del medio ambiente.
          </p>
        </div>
        <div className="vision">
          <h2 className="vision-titulo">Visión</h2>
          <p className="vision-descripcion">
          Ser la empresa líder en la producción y comercialización de carbón y leña. Sostenible en el mercado nacional e internacional, reconocida por nuestra calidad, compromiso con el medio ambiente y el impulso al desarrollo de las comunidades rurales.
          </p>
        </div>
      </section>
      <Footer />
    </body>
  );
};
