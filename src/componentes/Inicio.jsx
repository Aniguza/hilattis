import React, { useState, useEffect } from "react";
import "../assets/css/inicio.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useFetch } from "./apiService";
import { Loader } from "./loader";

import img1 from "../assets/imgs/inicio1.png";
import img2 from "../assets/imgs/inicio2.png";
import img3 from "../assets/imgs/inicio3.jpeg";

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
        <div className="content-container">
          <div className="grid-container">
            <div className="text-container">
              <h1 className="title font-adlam">
                {errorEmpresas
                  ? `Error: ${errorEmpresas}`
                  : empresas && empresas.length > 0
                  ? empresas[0].title
                  : "No hay empresas disponibles"}
              </h1>
              <p className="description font-adlam">
                {errorEmpresas
                  ? `Error: ${errorEmpresas}`
                  : empresas && empresas.length > 0
                  ? empresas[0].subtitle
                  : "No hay empresas disponibles"}
              </p>
            </div>
            <div className="image-container">
              <img src={img1} alt="Interior design" className="feature-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="features-container">
        <div className="features-grid">
          <div className="feature-card top-left">
            <div className="icon tree-icon">🌲</div>
            <div className="feature-content">
              <h3>Madera Premium</h3>
              <p>
                Seleccionada de los mejores árboles frutales, eucaliptos y
                plantas aromáticas, nuestra madera ofrece una experiencia única
                de aroma y calor.
              </p>
            </div>
          </div>

          <div className="feature-card top-right">
            <div className="icon fire-icon">🔥</div>
            <div className="feature-content">
              <h3>Carbón Artesanal</h3>
              <p>
                Producido con técnicas tradicionales, nuestro carbón garantiza
                una combustión prolongada y un sabor excepcional en cada uso.
              </p>
            </div>
          </div>

          <div className="central-image">
            <img src={img2} alt="Carbón artesanal en bolsa" />
          </div>

          <div className="feature-card bottom-left">
            <div className="icon gift-icon">🎁</div>
            <div className="feature-content">
              <h3>Productos Personalizados</h3>
              <p>
                Adaptamos nuestros productos a tus necesidades específicas, ya
                sea para cocina, calefacción o proyectos especiales.
              </p>
            </div>
          </div>

          <div className="feature-card bottom-right">
            <div className="icon leaf-icon">🌱</div>
            <div className="feature-content">
              <h3>Compromiso Ecológico</h3>
              <p>
                Trabajamos con prácticas sostenibles y materiales renovables,
                cuidando el medio ambiente en cada paso del proceso.
              </p>
            </div>
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
            categorias &&
            categorias.map((categoria) => (
              <div key={categoria.id} className="product-card">
                <div
                  className="product-background"
                  style={{
                    backgroundImage: `url(${
                      categoria.imagen || "https://via.placeholder.com/300"
                    })`,
                  }}
                >
                  <div className="product-overlay">
                    <h3 className="product-name">{categoria.nombre}</h3>
                    <p className="product-description">
                      {categoria.descripcion}
                    </p>
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
          <img src={img3} alt="" className="bg-preguntas" />
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
