import React, { useEffect, useState } from "react";
import "../assets/css/inicio.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { fetchData } from "./apiService";

import Fondo from "../assets/imgs/hilatis-fondo.jpeg";

export const Inicio = ({ setCanAccess }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setCanAccess(true);
    localStorage.setItem("canAccess", "true");
  
    const fetchInitialData = async () => {
      try {
        const [productsData, heroData, userData] = await Promise.all([
          fetchData('/productos'),
          fetchData('/api/usuarios/'),
        ]);
  
        setProducts(productsData);
        setHeroContent(heroData);
  
        // Verifica que userData tenga los datos correctos
        if (userData && userData.nombre) {
          const fullName = userData.nombre; // Obtén el nombre completo
          const firstName = fullName.split(' ')[0]; // Toma solo el primer nombre
          setUserName(firstName); // Asigna el primer nombre a userName
          console.log("Nombre del usuario:", firstName);
        }
  
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching initial data:", err);
        setError('Error al cargar los datos. Por favor, intenta de nuevo más tarde.');
        setIsLoading(false);
      }
    };
  
    fetchInitialData();
  
    return () => {
      setCanAccess(true);
    };
  }, [setCanAccess]);
  

  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "How long until we deliver your first blog post?",
      answer: "We typically deliver your first blog post within 5-7 business days after receiving your requirements.",
    },
    {
      question: "How do you ensure quality in your blog posts?",
      answer: "Our team works efficiently to ensure quick turnaround times while maintaining quality.",
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
            <h1 className="title">
            {isLoading ? 'Cargando...' : `Bienvenido, ${userName || 'Usuario'}`}

            </h1>
            <p className="description"></p>
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
          {isLoading ? (
            <p>Cargando productos...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            products.map((product) => (
              <a key={product.id} href="#" className="product-card">
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-text">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-variants">+{product.variants} variantes</p>
                  </div>
                </div>
              </a>
            ))
          )}
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
