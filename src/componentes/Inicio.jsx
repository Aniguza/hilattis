import React, { useState, useEffect } from "react";
import "../assets/css/inicio.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useFetch } from "./apiService";
import { Loader } from './loader';

import Fondo from "../assets/imgs/hilatis-fondo.jpeg";

export const Inicio = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Fetch para empresas
  const {
    data: empresas,
    loading: loadingEmpresas,
    error: errorEmpresas,
  } = useFetch("https://web-production-4880.up.railway.app/empresas/");

  // Fetch para categorías
  const {
    data: categorias,
    loading: loadingCategorias,
    error: errorCategorias,
  } = useFetch("https://web-production-4880.up.railway.app/categorias/");

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
      answer:
        "The delivery timeline depends on the complexity of the content requested.",
    },
    {
      question: "Can I request revisions on the blog post?",
      answer:
        "We strive to deliver your content as quickly as possible without compromising quality.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (!loadingEmpresas && !loadingCategorias) {
      setIsLoading(false);
    }
  }, [loadingEmpresas, loadingCategorias]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <body className="relative min-h-screen">
      <Navbar />

      <div className="relative">
        <div>
          <img src={Fondo} alt="" className="background-image" />
        </div>
        <div className="content-overlay">
          <div className="text-container">
            <h1 className="title">
            {errorEmpresas
              ? `Error: ${errorEmpresas}`
              : empresas && empresas.length > 0
              ? empresas[0].title
              : "No hay empresas disponibles"}
            </h1>
            <p className="description">
            {errorEmpresas
              ? `Error: ${errorEmpresas}`
              : empresas && empresas.length > 0
              ? empresas[0].subtitle
              : "No hay empresas disponibles"}
            </p>
          </div>
        </div>
      </div>

      {/* Sección de Productos */}
      <section className="products-section">
        <div className="products-header">
          <h2 className="products-title">Nuestros Productos</h2>
          <p className="products-description">
            Descubre los productos que ofrecemos.
          </p>
        </div>

        <div className="products-grid">
          {errorCategorias ? (
            <p>Error: {errorCategorias}</p>
          ) : categorias && categorias.length === 0 ? (
            <p>No hay categorías disponibles.</p>
          ) : (
            categorias && categorias.map((categoria) => (
              <div key={categoria.id} className="product-card">
                <div
                  className="product-background"
                  style={{
                    backgroundImage: `url(${categoria.imagen || "https://via.placeholder.com/300"})`,
                  }}
                >
                  <div className="product-overlay">
                    <h3 className="product-name">{categoria.nombre}</h3>
                    <p className="product-description">{categoria.descripcion}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Preguntas frecuentes */}
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
                  className={`faq-question ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                >
                  {item.question}
                  <span className="faq-icon">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`faq-answer ${
                    activeIndex === index ? "active" : ""
                  }`}
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

