import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import "../assets/css/about.css";
import "../assets/css/global.css";
import { useFetch } from "./apiService";
import img2 from "../assets/imgs/nosotros2.png";
import { EyeIcon, StarIcon } from "@heroicons/react/24/outline";

export const About = () => {
  const { data, loading, error } = useFetch(
    "https://web-production-4880.up.railway.app/empresas/"
  );

  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <body className="relative min-h-screen about">
      <Navbar />
      <section className="hero-proyectos">
        <div className="custom-overlay"></div>
        <div className="proyectos-bg">
          <h1 className="proy-title font-adlam"></h1>
          <p className="proy-descr">
            Descubre nuestros proyectos más recientes
          </p>
        </div>
      </section>

      <section className="como-empezamos">
        <div className="como-empezamos-texto">
          <h2 className="como-empezamos-titulo font-adlam">¿Cómo empezamos?</h2>
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
        <div className="como-empezamos-video">
          <img src={img2} alt="" />
        </div>
      </section>

      <section className="quote-container ">
        <blockquote className="quote">
          <p className="quote-marks-open">“</p>
          <p className="quote-text font-adlam">
            Trabajamos con pasión para encender oportunidades y construir un
            futuro sostenible
          </p>
          <span className="quote-marks-closing ">”</span>
          <cite className="quote-author font-adlam">CEO Hilattis</cite>
        </blockquote>
      </section>

      <section className="mision-vision">
        <div className="feature-card ">
          <div className="icon-about gift-icon">
            <StarIcon className="h-8 w-8 text-gray-500" />
          </div>
          <div className="feature-content">
            <h3 className="mision-titulo font-adlam">Misión</h3>
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
        </div>
        <div className="feature-card ">
          <div className="icon-about gift-icon">
            <EyeIcon className="h-8 w-8 text-gray-500" />
          </div>
          <div className="feature-content">
            <h3 className="vision-titulo font-adlam">Visión</h3>
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
        </div>
      </section>
      <Footer />
    </body>
  );
};
