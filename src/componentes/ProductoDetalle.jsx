import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { useFetch } from "./apiService"
import { useCart } from "../context/cart-context"
import "../assets/css/productoDetalle.css"

export const ProductoDetalle = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(null)
  const [productImages, setProductImages] = useState([])

  const {
    data: product,
    loading: loadingProduct,
    error: errorProduct,
  } = useFetch(`https://web-production-4880.up.railway.app/productos/${id}`)

  const {
    data: variants,
    loading: loadingVariants,
    error: errorVariants,
  } = useFetch(`https://web-production-4880.up.railway.app/variants/${id}/`)

  useEffect(() => {
    if (product) {
      setProductImages([product.imagen_default])
    }
  }, [product])

  useEffect(() => {
    if (variants && variants.length > 0) {
      setSelectedVariant(variants[0])
      setProductImages([variants[0].img1, variants[0].img2, variants[0].img3].filter(Boolean))
    }
  }, [variants])

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1))
  }

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index)
  }

  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant)
    setCurrentImageIndex(0)
    setProductImages([variant.img1, variant.img2, variant.img3].filter(Boolean))
  }

  const handleAddToCart = () => {
    if (selectedVariant) {
      addToCart({
        id_producto: selectedVariant.producto,
        nombre: product.nombre,
        precio: Number(selectedVariant.precio),
        cantidad: 1,
        imagen_default: selectedVariant.img1,
        variante: selectedVariant.nombre,
      })
    } else if (product) {
      addToCart({
        id_producto: product.id_producto,
        nombre: product.nombre,
        precio: Number(product.precio),
        cantidad: 1,
        imagen_default: product.imagen_default,
      })
    }
  }

  if (loadingProduct || loadingVariants) {
    return (
      <div className="min-h-screen bg-[#FAF9F8]">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="loading">Cargando...</div>
        </div>
        <Footer />
      </div>
    )
  }

  if (errorProduct) {
    return (
      <div className="min-h-screen bg-[#FAF9F8]">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="error">Error al cargar el producto: {errorProduct}</div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FAF9F8]">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="error">Producto no encontrado</div>
        </div>
        <Footer />
      </div>
    )
  }

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
              <button className="carousel-button prev" onClick={handlePrevImage} aria-label="Imagen anterior">
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
              <button className="carousel-button next" onClick={handleNextImage} aria-label="Siguiente imagen">
                ›
              </button>
            </div>
            <div className="thumbnail-container">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${index === currentImageIndex ? "active" : ""}`}
                  onClick={() => handleThumbnailClick(index)}
                  aria-label={`Ver imagen ${index + 1}`}
                >
                  <img src={image || "/placeholder.svg"} alt={`${product.nombre} - Miniatura ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.nombre} </h1>
            <div className="product-price">S/. {selectedVariant ? selectedVariant.precio : product.precio}</div>

            {variants && variants.length > 0 && (
              <div className="product-variants">
                <h2>Variantes</h2>
                <div className="variant-options">
                  {variants.map((variant) => (
                    <button
                      key={variant.id_variante}
                      className={`variant-option ${selectedVariant && selectedVariant.id_variante === variant.id_variante ? "active" : ""}`}
                      onClick={() => handleVariantSelect(variant)}
                    >
                      {variant.nombre}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="product-details">
              <h2>Detalle del producto</h2>
              <p>{selectedVariant ? selectedVariant.descripcion : product.descripcion}</p>
            </div>

            <button onClick={handleAddToCart} disabled={product.estatus === "AGOTADO"} className="add-to-cart-button">
              {product.estatus === "AGOTADO" ? "Agotado" : "Agregar al carrito"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

