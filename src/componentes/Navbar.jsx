import "../assets/css/navbar.css"
import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [scrolling, setScrolling] = useState(false); 

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

  return (
    <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="container">
        
        <div className="logo">
          <Link to="/" className="navbar-link">Hilattis</Link>
        </div>

        <div className="hidden md:flex flex-grow justify-center space-x-4">
          <Link to="/" className="navbar-link">Tienda</Link>
          <Link to="/About" className="navbar-link">Acerca de</Link>
          <Link to="" className="navbar-link">Proyectos</Link>
          <Link to="" className="navbar-link">Contacto</Link>
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
      <Outlet />
    </nav>
    
  );
};