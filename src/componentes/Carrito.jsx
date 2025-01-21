import React from "react"
import { useCart } from "../context/cart-context"
import { Link } from "react-router-dom"
import { TrashIcon } from "@heroicons/react/24/outline"

export const Carrito = () => {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0)

  if (cart.length === 0) {
    return (
      <div className="container mt-20 px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Tu carrito está vacío</h1>
        <p className="mb-4">No hay productos en tu carrito.</p>
        <Link to="/Tienda" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Ir a la tienda
        </Link>
      </div>
    )
  }

  return (
    <div className="container mt-20 px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Tu Carrito</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left">Producto</th>
              <th className="px-6 py-3 text-left">Precio</th>
              <th className="px-6 py-3 text-left">Cantidad</th>
              <th className="px-6 py-3 text-left">Subtotal</th>
              <th className="px-6 py-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id_producto} className="border-b">
                <td className="px-6 py-4">{item.nombre}</td>
                <td className="px-6 py-4">S/.{item.precio.toFixed(2)}</td>
                <td className="px-6 py-4">{item.cantidad}</td>
                <td className="px-6 py-4">S/.{(item.precio * item.cantidad).toFixed(2)}</td>
                <td className="px-6 py-4">
                  <button onClick={() => removeFromCart(item.id_producto)} className="text-red-500 hover:text-red-700">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Total: S/.{total.toFixed(2)}</h2>
        </div>
        <div className="space-x-4">
          <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Vaciar Carrito
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Proceder al Pago</button>
        </div>
      </div>
    </div>
  )
}

