import { useCart } from "../context/cart-context"
import { Link } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline"
import "../assets/css/carrito.css"
import "../assets/css/global.css"

export const Carrito = () => {
  const { cart, removeFromCart, updateQuantity } = useCart()

  const formatPrice = (price) => {
    const numPrice = Number(price)
    return isNaN(numPrice) ? 0 : numPrice
  }

  const total = cart.reduce((sum, item) => sum + formatPrice(item.precio) * item.cantidad, 0)

  const handleImageError = (e) => {
    e.target.src = "/placeholder.svg"
    e.target.onerror = null
  }

  if (cart.length === 0) {
    return (
      <div className="carrito-container">
        <div className="carrito-content">
          <div className="carrito-empty">
            <h2>Tu carrito está vacío</h2>
            <p>¿No sabes qué comprar? ¡Miles de productos te esperan!</p>
            <Link to="/Tienda" className="carrito-empty-button">
              Ir a la tienda
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="carrito-layout">
        <div className="carrito-main">
          <div className="carrito-header">
            <h1>
              Carro <span className="text-gray-500">({cart.length} productos)</span>
            </h1>
          </div>

          <div className="carrito-items-container">
            <div className="vendedor-section">
              <div className="vendedor-header">
                <span className="vendedor-name">
                  Vendido por <span className="text-green-600">Hilattis</span>
                </span>
              </div>

              {cart.map((item) => {
                const precio = formatPrice(item.precio)

                return (
                  <div key={`${item.id_producto}-${item.nombre}`} className="cart-item">
                    <div className="item-main-content">
                      <div className="item-image">
                        {item.imagen_default ? (
                          <img
                            src={item.imagen_default || "/placeholder.svg"}
                            alt={item.nombre}
                            onError={handleImageError}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="placeholder-image">
                            <span>Sin imagen</span>
                          </div>
                        )}
                      </div>
                      <div className="item-details">
                        <h3>{item.nombre}</h3>
                        <div className="item-brand">{item.marca}</div>
                        <div className="item-price">
                          <span className="current-price">S/ {precio.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="item-actions">
                      <div className="quantity-control">
                        <button
                          onClick={() => updateQuantity(item.id_producto, item.nombre, item.cantidad - 1)}
                          className="quantity-button"
                          disabled={item.cantidad <= 1}
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span className="quantity-display">{item.cantidad}</span>
                        <button
                          onClick={() => updateQuantity(item.id_producto, item.nombre, item.cantidad + 1)}
                          className="quantity-button"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id_producto, item.nombre)}
                        className="delete-button"
                        aria-label="Eliminar producto"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="order-summary">
          <div className="summary-content">
            <h2>Resumen de la orden</h2>

            <div className="summary-row">
              <span>Productos ({cart.length})</span>
              <span>S/ {total.toFixed(2)}</span>
            </div>

            <div className="summary-total">
              <span>Total:</span>
              <span>S/ {total.toFixed(2)}</span>
            </div>

            <button className="checkout-button">Continuar compra</button>

            <div className="payment-promo">
              <img src="/yape-logo.svg" alt="Yape" className="h-8 w-8" />
              <span>¡Ahora puedes pagar tus compras con Yape!</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

