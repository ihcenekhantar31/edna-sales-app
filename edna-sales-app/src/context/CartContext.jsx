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
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)) } catch {}
  }, [items])

  useEffect(() => {
    try { localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customer)) } catch {}
  }, [customer])

  /**
   * Add a variant to cart.
   * @param {Object} product - product group object
   * @param {Object} variant - { id, size, packFormat, sku, price, salePrice, stock }
   * @param {number} qty
   */
  const addToCart = useCallback((product, variant, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.variantId === variant.id)
      if (existing) {
        return prev.map((i) => i.variantId === variant.id ? { ...i, qty: i.qty + qty } : i)
      }
      return [
        ...prev,
        {
          variantId:   variant.id,
          productId:   product.id,
          productSlug: product.slug,
          name:        product.name,
          brand:       product.brand,
          category:    product.category,
          subcategory: product.subcategory,
          size:        variant.size,
          packFormat:  variant.packFormat,
          sku:         variant.sku,
          price:       variant.price,
          salePrice:   variant.salePrice,
        },
      ]
    })
  }, [])

  const removeFromCart = useCallback((variantId) => {
    setItems((prev) => prev.filter((i) => i.variantId !== variantId))
  }, [])

  const updateQty = useCallback((variantId, qty) => {
    if (qty < 1) return
    setItems((prev) => prev.map((i) => i.variantId === variantId ? { ...i, qty } : i))
  }, [])

  const clearCart = useCallback(() => { setItems([]) }, [])

  const setCustomer = useCallback((fields) => {
    setCustomerState((prev) => ({ ...prev, ...fields }))
  }, [])

  /** True if ANY variant of this product group is in cart */
  const isInCart = useCallback(
    (productId) => items.some((i) => i.productId === productId),
    [items]
  )

  /** True if this specific variant is in cart */
  const isVariantInCart = useCallback(
    (variantId) => items.some((i) => i.variantId === variantId),
    [items]
  )

  const getQty = useCallback(
    (variantId) => {
      const item = items.find((i) => i.variantId === variantId)
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
        isVariantInCart,
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
