import "../assets/css/navbar.css"
import React, { useState, useEffect } from "react"
import { Outlet, Link, useLocation } from "react-router-dom"
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"
import { useCart } from "../context/cart-context"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolling, setScrolling] = useState(false)
  const location = useLocation()
  const { getCartCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHomePage = location.pathname === "/"

  return (
    <nav className={`navbar ${isHomePage && !scrolling ? "transparent" : "scrolled"}`}>
      <div className="container font-adlam">
        <div className="logo">
          <Link to="/" className="navbar-logo">
            <p>Hillattis</p>
          </Link>
        </div>

        <div className="hidden md:flex flex-grow justify-center space-x-4">
          <Link to="/Tienda" className="navbar-link">
            Tienda
          </Link>
          <Link to="/About" className="navbar-link">
            Acerca de
          </Link>
          <Link to="/Proyectos" className="navbar-link">
            Proyectos
          </Link>
          <Link to="/Contacto" className="navbar-link">
            Contacto
          </Link>
        </div>

        <div className="carro-menu">
          <Link to="/Carrito" className="navbar-link carrito">
            <ShoppingCartIcon className="h-6 w-6 text-white" />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {getCartCount()}
              </span>
            )}
          </Link>
          <div className="md:hidden">
            <button className="hamburger-button" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <XMarkIcon className="h-6 w-6 text-white" /> : <Bars3Icon className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center">
          <Link to="/Tienda" className="navbar-link">
            Tienda
          </Link>
          <Link to="/About" className="navbar-link">
            Acerca de
          </Link>
          <Link to="/Proyectos" className="navbar-link">
            Proyectos
          </Link>
          <Link to="/Contacto" className="navbar-link">
            Contacto
          </Link>
        </div>
      )}

      <Outlet />
    </nav>
  )
}

