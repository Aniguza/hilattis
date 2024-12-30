import "../assets/css/navbar.css";
import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoNombre from '../assets/imgs/logo_nombre.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [scrolling, setScrolling] = useState(false); 
  const location = useLocation(); // Obtener la ubicación actual

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Verificar si estamos en la página de inicio
  const isHomePage = location.pathname === "/";

  return (
    <nav className={`navbar ${isHomePage && !scrolling ? 'transparent' : 'scrolled'}`}>
      <div className="container">
        
        <div className="logo">
          <Link to="/" className="navbar-logo"><p>Hillattis</p></Link>
        </div>

        <div className="hidden md:flex flex-grow justify-center space-x-4">
          <Link to="/" className="navbar-link">Tienda</Link>
          <Link to="/About" className="navbar-link">Acerca de</Link>
          <Link to="/Proyectos" className="navbar-link">Proyectos</Link>
          <Link to="/Contacto" className="navbar-link">Contacto</Link>
        </div>

        <div className="md:hidden">
          <button 
            className="hamburger-button" 
            onClick={() => setIsOpen(!isOpen)} 
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center">
          <Link to="/" className="navbar-link">Tienda</Link>
          <Link to="/About" className="navbar-link">Acerca de</Link>
          <Link to="" className="navbar-link">Proyectos</Link>
          <Link to="" className="navbar-link">Contacto</Link>
        </div>
      )}

      <Outlet />
    </nav>
  );
};