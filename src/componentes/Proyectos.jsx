import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import "../assets/css/Proyectos.css";
import { useFetch } from "./apiService";

export const Proyectos = () => {
  const {
    data: proyectos,
    loading: loadingProyectos,
    error: errorProyectos,
  } = useFetch("https://web-production-4880.up.railway.app/projects/");

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <section className="hero-proyectos">
        <div className="custom-overlay"></div>
        <div className="proyectos-bg">
          <h1 className="proy-title">Nuestros Proyectos</h1>
          <p className="proy-descr">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      <div className="container-proyectos">
        <div className="projects-grid">
        {loadingProyectos ? (
          <p className="col-span-full text-center">Cargando proyectos...</p>
        ) : errorProyectos ? (
          <p className="col-span-full text-center text-red-500">
            Error: {errorProyectos.message}
          </p>
        ) : proyectos && proyectos.length === 0 ? (
          <p className="col-span-full text-center">
            No hay proyectos disponibles.
          </p>
        ) : (
          proyectos &&
          proyectos.map((project) => (
            <a
              key={project.id}
              href={project.link || "#"}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-image">
              <img
                  src={project.imagen1}
                  alt={project.titulo}
                  
                />
              </div>
              <div className="project-overlay">
                <div className="project-content">
                  <h3 className="project-title">{project.titulo}</h3>
                  <p className="project-description">{project.fecha_proyecto}</p>
                </div>
              </div>
            </a>
           ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
