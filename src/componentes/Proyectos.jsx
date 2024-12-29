import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import "../assets/css/Proyectos.css";

export const Proyectos = () => {
  const projects = [
    {
      id: 1,
      title: "Proyecto Residencial",
      description: "Diseño minimalista para espacios modernos",
      image: "/src/assets/imgs/hilatis-fondo.jpeg",
    },
    {
      id: 2,
      title: "Diseño Comercial",
      description: "Espacios comerciales con estilo único",
      image: "/src/assets/imgs/hilatis-fondo.jpeg",
    },
    {
      id: 3,
      title: "Renovación Urbana",
      description: "Transformación de espacios públicos",
      image: "/src/assets/imgs/hilatis-fondo.jpeg",
    },
    {
      id: 4,
      title: "Diseño Sostenible",
      description: "Proyectos eco-amigables y eficientes",
      image: "/src/assets/imgs/hilatis-fondo.jpeg",
    },
    {
      id: 5,
      title: "Interiores Modernos",
      description: "Espacios contemporáneos y funcionales",
      image: "/src/assets/imgs/hilatis-fondo.jpeg",
    },
    {
      id: 6,
      title: "Proyecto Corporativo",
      description: "Diseño de oficinas y espacios de trabajo",
      image: "/src/assets/imgs/hilatis-fondo.jpeg",
    },
  ];

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
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-overlay">
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
