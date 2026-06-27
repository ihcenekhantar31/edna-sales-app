import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'edna_cart'
const CUSTOMER_KEY = 'edna_customer'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  const [customer, setCustomerState] = useState(() => {
    try {
      const stored = localStorage.getItem(CUSTOMER_KEY)
      return stored ? JSON.parse(stored) : { name: '', phone: '', address: '', notes: '' }
    } catch {
      return { name: '', phone: '', address: '', notes: '' }
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {}
  }, [items])

  useEffect(() => {
    try {
      localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customer))
    } catch {}
  }, [customer])

  const addToCart = useCallback((product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === product.id)
      if (existing) {
        return prev.map((i) =>
          i.productId === product.id ? { ...i, qty: i.qty + qty } : i
        )
      }
      return [
        ...prev,
        {
          productId: product.id,
          qty,
          name: product.name,
          brand: product.brand,
          unit: product.unit,
          price: product.price,
          salePrice: product.salePrice,
          category: product.category,
          subcategory: product.subcategory,
          sku: product.sku,
        },
      ]
    })
  }, [])

  const removeFromCart = useCallback((productId) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId))
  }, [])

  const updateQty = useCallback((productId, qty) => {
    if (qty < 1) return
    setItems((prev) =>
      prev.map((i) => (i.productId === productId ? { ...i, qty } : i))
    )
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const setCustomer = useCallback((fields) => {
    setCustomerState((prev) => ({ ...prev, ...fields }))
  }, [])

  const isInCart = useCallback(
    (productId) => items.some((i) => i.productId === productId),
    [items]
  )

  const getQty = useCallback(
    (productId) => {
      const item = items.find((i) => i.productId === productId)
      return item ? item.qty : 0
    },
    [items]
  )

  const totalItems = items.reduce((acc, i) => acc + i.qty, 0)
  const totalLines = items.length

  const subtotal = items.reduce((acc, i) => {
    const price = i.salePrice ?? i.price
    return price ? acc + price * i.qty : acc
  }, 0)

  const hasPrices = items.every((i) => i.price !== null && i.price !== undefined)

  return (
    <CartContext.Provider
      value={{
        items,
        customer,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        setCustomer,
        isInCart,
        getQty,
        totalItems,
        totalLines,
        subtotal,
        hasPrices,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
