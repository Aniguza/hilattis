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
          <h1 className="proy-title font-adlam">Nuestros Proyectos</h1>
          <p className="proy-descr">
            Descubre nuestros proyectos más recientes
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
      <p className="col-span-full text-center">No hay proyectos disponibles.</p>
    ) : (
      proyectos &&
      proyectos.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-image">
            <img src={project.imagen1} alt={project.titulo} />
            <div className="project-content">
              <p className="project-fecha font-adlam">{project.fecha_proyecto}</p>
            </div>
          </div>
          <h3 className="project-title font-adlam">{project.titulo}</h3>
          <h4 className="project-description line-clamp-4">
            {project.descripcion}
          </h4>
          <a 
            href={project.link || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-read-more"
          >
            Leer más
          </a>
        </div>
      ))
    )}
  </div>
</div>

      <Footer />
    </div>
  );
};
