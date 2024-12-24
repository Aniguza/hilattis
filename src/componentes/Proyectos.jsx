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
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Diseño Comercial",
      description: "Espacios comerciales con estilo único",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Renovación Urbana",
      description: "Transformación de espacios públicos",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "Diseño Sostenible",
      description: "Proyectos eco-amigables y eficientes",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: "Interiores Modernos",
      description: "Espacios contemporáneos y funcionales",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: "Proyecto Corporativo",
      description: "Diseño de oficinas y espacios de trabajo",
      image: "/placeholder.svg?height=300&width=400",
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
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-overlay">
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
