import React, { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id_producto === product.id_producto)
      if (existingItem) {
        return currentCart.map((item) =>
          item.id_producto === product.id_producto ? { ...item, cantidad: item.cantidad + 1 } : item,
        )
      }
      return [...currentCart, { ...product, cantidad: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id_producto !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity > 0) {
      setCart((currentCart) =>
        currentCart.map((item) => (item.id_producto === productId ? { ...item, cantidad: newQuantity } : item)),
      )
    } else {
      removeFromCart(productId)
    }
  }

  const clearCart = () => {
    setCart([])
  }

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.cantidad, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

