import React, { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { useFetch } from "./apiService"
import { useCart } from "../context/cart-context"
import "../assets/css/producto.css"

export const ProductoDetalle = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const {
    data: product,
    loading,
    error,
  } = useFetch(`https://web-production-4880.up.railway.app/productos/${id}`)

  // Simulamos múltiples imágenes para el carousel
  const productImages = product ? [
    product.imagen_default,
    product.img1,
    product.img2,
  ] : []

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? productImages.length - 1 : prev - 1
    )
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === productImages.length - 1 ? 0 : prev + 1
    )
  }

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index)
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id_producto: product.id_producto,
        nombre: product.nombre,
        precio: Number(product.precio),
        cantidad: 1,
        imagen_default: product.imagen_default,
      })
    }
  }

  if (loading) return (
    <div className="min-h-screen bg-[#FAF9F8]">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="loading">Cargando...</div>
      </div>
      <Footer />
    </div>
  )

  if (error) return (
    <div className="min-h-screen bg-[#FAF9F8]">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="error">Error al cargar el producto</div>
      </div>
      <Footer />
    </div>
  )

  if (!product) return (
    <div className="min-h-screen bg-[#FAF9F8]">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="error">Producto no encontrado</div>
      </div>
      <Footer />
    </div>
  )

  return (
    <div className="min-h-screen bg-[#FAF9F8]">
      <Navbar />
      <div className="product-container">
        <Link to="/tienda" className="back-link">
          ← Volver a la tienda
        </Link>

        <div className="product-layout">
          <div className="product-images">
            <div className="main-image-container">
              <button 
                className="carousel-button prev" 
                onClick={handlePrevImage}
                aria-label="Imagen anterior"
              >
                ‹
              </button>
              <div className="main-image">
                {productImages[currentImageIndex] ? (
                  <img
                    src={productImages[currentImageIndex] || "/placeholder.svg"}
                    alt={`${product.nombre} - Vista ${currentImageIndex + 1}`}
                    className="product-img"
                  />
                ) : (
                  <div className="image-placeholder">
                    <span>📷</span>
                  </div>
                )}
              </div>
              <button 
                className="carousel-button next" 
                onClick={handleNextImage}
                aria-label="Siguiente imagen"
              >
                ›
              </button>
            </div>
            <div className="thumbnail-container">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => handleThumbnailClick(index)}
                  aria-label={`Ver imagen ${index + 1}`}
                >
                  <img src={image || "/placeholder.svg"} alt={`${product.nombre} - Miniatura ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.nombre}</h1>
            <div className="product-price">S/. {product.precio}</div>

            <div className="product-details">
              <h2>Detalle del producto</h2>
              <p>{product.descripcion}</p>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={product.estatus === "AGOTADO"}
              className="add-to-cart-button"
            >
              {product.estatus === "AGOTADO" ? "Agotado" : "Agregar al carrito"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
