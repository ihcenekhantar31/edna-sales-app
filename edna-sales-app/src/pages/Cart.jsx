import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Trash2, MessageCircle, ShoppingBag, AlertCircle } from 'lucide-react'
import PageWrapper from '../components/layout/PageWrapper'
import QuantityControl from '../components/ui/QuantityControl'
import EmptyState from '../components/ui/EmptyState'
import Footer from '../components/layout/Footer'
import { useCart } from '../context/CartContext'
import { buildWhatsAppMessage, openWhatsApp } from '../utils/whatsapp'
import { getProductEmoji, formatPrice } from '../utils/helpers'

export default function Cart() {
  const { items, customer, setCustomer, removeFromCart, updateQty, clearCart, subtotal, hasPrices, totalItems } = useCart()
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)

  const whatsAppMessage = buildWhatsAppMessage(items, customer)

  const handleSend = () => {
    if (!customer.name.trim()) {
      alert('Please enter your business name or contact name before sending.')
      return
    }
    if (!items.length) return
    setSubmitting(true)
    openWhatsApp(items, customer)
    setTimeout(() => setSubmitting(false), 2000)
  }

  if (!items.length) {
    return (
      <>
        <PageWrapper>
          <EmptyState
            icon="🛒"
            title="Your cart is empty"
            description="Browse the catalogue and add products to start building your order."
            actionLabel="Browse Catalogue"
            actionTo="/catalogue"
          />
        </PageWrapper>
        <Footer />
      </>
    )
  }

  return (
    <>
      <PageWrapper>
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Your Order Cart</h1>
            <p className="text-gray-500 text-sm mt-1">
              {items.length} product{items.length > 1 ? 's' : ''} · {totalItems} case{totalItems > 1 ? 's' : ''}
            </p>
          </div>
          <button
            onClick={() => { if (confirm('Clear all items from cart?')) clearCart() }}
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Clear cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-3">
            {items.map((item) => {
              const emoji = getProductEmoji(item.category, item.subcategory)
              const price = item.salePrice ?? item.price
              return (
                <div
                  key={item.variantId}
                  className="bg-white border border-gray-200 rounded-xl p-4 flex gap-4 items-center"
                >
                  <div
                    className="w-16 h-16 bg-[#E8F5EE] rounded-lg flex items-center justify-center text-3xl flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => navigate(`/product/${item.productSlug}`)}
                  >
                    {emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-gray-900 leading-snug mb-0.5 line-clamp-2">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-400 mb-2">
                      {item.size ? `${item.size} — ` : ''}📦 {item.packFormat}
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <QuantityControl
                        value={item.qty}
                        onChange={(v) => updateQty(item.variantId, v)}
                        size="sm"
                      />
                      {price ? (
                        <span className="text-sm font-bold text-[#1A3C2B]">
                          {formatPrice(price * item.qty)}
                        </span>
                      ) : (
                        <span className="text-xs text-gray-400 italic">Price on request</span>
                      )}
                      <button
                        onClick={() => removeFromCart(item.variantId)}
                        className="text-xs text-gray-400 hover:text-red-500 underline ml-auto transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}

            <button
              onClick={() => navigate('/catalogue')}
              className="flex items-center gap-2 text-sm text-[#2D6A4F] font-medium hover:text-[#1A3C2B] mt-2 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              Continue shopping
            </button>
          </div>

          {/* Order summary + WA form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 sticky top-20 space-y-5">
            <h2 className="font-bold text-gray-900 text-lg">Order Summary</h2>

            {/* Line items */}
            <div className="space-y-1.5">
              {items.map((item) => {
                const price = item.salePrice ?? item.price
                return (
                  <div key={item.variantId} className="flex justify-between text-sm gap-2">
                    <span className="text-gray-500 truncate flex-1">
                      {item.name.substring(0, 28)}{item.name.length > 28 ? '…' : ''} ×{item.qty}
                    </span>
                    <span className="font-medium flex-shrink-0">
                      {price ? formatPrice(price * item.qty) : '—'}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
              <span className="font-bold text-gray-900">Total</span>
              <span className="font-bold text-[#1A3C2B] text-lg">
                {hasPrices && subtotal > 0 ? formatPrice(subtotal) : 'To be confirmed'}
              </span>
            </div>

            {/* Customer form */}
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-semibold text-gray-900 text-sm mb-3">Your Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    Business / Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={customer.name}
                    onChange={(e) => setCustomer({ name: e.target.value })}
                    placeholder="e.g. La Belle Cuisine Restaurant"
                    className="input text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Phone number</label>
                  <input
                    type="tel"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ phone: e.target.value })}
                    placeholder="(514) 555-0123"
                    className="input text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Delivery address</label>
                  <input
                    type="text"
                    value={customer.address}
                    onChange={(e) => setCustomer({ address: e.target.value })}
                    placeholder="Street address, city"
                    className="input text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Notes (optional)</label>
                  <textarea
                    value={customer.notes}
                    onChange={(e) => setCustomer({ notes: e.target.value })}
                    placeholder="Delivery instructions, special requests…"
                    className="input text-sm resize-none"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* WhatsApp preview */}
            <div className="bg-[#075e54] rounded-xl p-3 max-h-44 overflow-y-auto">
              <div className="flex items-center gap-1.5 mb-2">
                <MessageCircle className="w-3.5 h-3.5 text-white/50" />
                <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                  WhatsApp Message Preview
                </span>
              </div>
              <div className="bg-[#dcf8c6] rounded-lg rounded-tr-sm p-3 text-xs font-mono whitespace-pre-wrap text-gray-800 leading-relaxed">
                {whatsAppMessage}
              </div>
            </div>

            {!customer.name.trim() && (
              <div className="flex items-center gap-2 text-amber-600 text-xs bg-amber-50 rounded-lg px-3 py-2">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                Add your name or business to send the order.
              </div>
            )}

            {/* Send button */}
            <button
              onClick={handleSend}
              disabled={!customer.name.trim() || submitting}
              className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold text-base py-3.5 rounded-xl transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787z" />
              </svg>
              {submitting ? 'Opening WhatsApp…' : 'Send Order via WhatsApp'}
            </button>
          </div>
        </div>
      </PageWrapper>
      <Footer />
    </>
  )
}
