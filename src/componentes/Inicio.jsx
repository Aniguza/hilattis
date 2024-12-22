import React, { useEffect, useState } from "react";
import "../assets/css/inicio.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

import Fondo from "../assets/imgs/hilatis-fondo.jpeg";
import Carbon from "../assets/imgs/carbon.jpg";
import Madera from "../assets/imgs/madera.jpg";

export const Inicio = ({ setCanAccess }) => {
  useEffect(() => {
    // Permitir acceso al estar en Inicio
    setCanAccess(true);
    localStorage.setItem("canAccess", "true"); // Guardar permiso de acceso en localStorage

    // Al desmontar, el acceso no se revierte
    return () => {
      setCanAccess(true);
    };
  }, [setCanAccess]);


  // Estado para manejar la FAQ
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "How long until we deliver your first blog post?",
      answer:
        "We typically deliver your first blog post within 5-7 business days after receiving your requirements.",
    },
    {
      question: "How do you ensure quality in your blog posts?",
      answer:
        "Our team works efficiently to ensure quick turnaround times while maintaining quality.",
    },
    {
      question: "What factors affect the delivery timeline?",
      answer: "The delivery timeline depends on the complexity of the content requested.",
    },
    {
      question: "Can I request revisions on the blog post?",
      answer: "We strive to deliver your content as quickly as possible without compromising quality.",
    },
  ];

  // Función para alternar la visibilidad de respuestas en FAQ
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <body className="relative min-h-screen">
      <Navbar />

      <div className="relative">
        <div>
          <img src={Fondo} alt="" className="background-image" />
        </div>
        <div className="content-overlay">
          <div className="text-container">
            <h1 className="title">Innovación y Sostenibilidad en Productos Naturales de origen vegetal</h1>
            <p className="description">
            Combinamos la innovación con la sostenibilidad para ofrecer productos naturales de alta calidad, contribuyendo al bienestar de nuestras comunidades y el cuidado del medio ambiente.            </p>
          </div>
        </div>
      </div>

      <section className="products-section">
        <div className="products-header">
          <h2 className="products-title">Nuestros Productos</h2>
          <p className="products-description">
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities.
          </p>
        </div>

        <div className="products-container">
          {/* Producto 1 */}
          <a href="#" className="product-card">
            <div className="product-image-container">
              <img src={Carbon} alt="Carbón" className="product-image" />
              <div className="product-text">
                <h3 className="product-name">Carbón</h3>
                <p className="product-variants">+4 variantes</p>
              </div>
            </div>
          </a>

          {/* Producto 2 */}
          <a href="#" className="product-card">
            <div className="product-image-container">
              <img src={Madera} alt="Madera" className="product-image" />
              <div className="product-text">
                <h3 className="product-name">Madera</h3>
                <p className="product-variants">+5 variantes</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section className="faq-section relative">
        <div className="w-[100%]">
          <img src={Fondo} alt="" className="bg-preguntas" />
        </div>
        <div className="faq-container">
          <h2 className="faq-title">Preguntas frecuentes</h2>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${activeIndex === index ? "active" : ""}`}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                >
                  {item.question}
                  <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
                </button>
                <div
                  className={`faq-answer ${activeIndex === index ? "active" : ""}`}
                  aria-hidden={activeIndex !== index}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </body>
  );
};
