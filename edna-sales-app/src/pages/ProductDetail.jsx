import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Check, ShoppingCart, ImageOff, ChevronDown } from 'lucide-react'
import PageWrapper from '../components/layout/PageWrapper'
import ProductCard from '../components/ui/ProductCard'
import QuantityControl from '../components/ui/QuantityControl'
import Badge from '../components/ui/Badge'
import Footer from '../components/layout/Footer'
import { getProductBySlug, getProductsByCategory } from '../data/products'
import { getCategoryBySlug } from '../data/categories'
import { useCart } from '../context/CartContext'
import { useToast } from '../components/ui/Toast'
import { formatPrice } from '../utils/helpers'
import { getProductImage } from '../data/productImageMap'

/** Human-readable label for a variant selector option */
function variantLabel(v) {
  if (v.size && v.packFormat) return `${v.size} — ${v.packFormat}`
  return v.packFormat || v.size || v.sku
}

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addToCart, isVariantInCart, getQty } = useCart()
  const { showToast } = useToast()
  const [qty, setQty] = useState(1)

  const product = getProductBySlug(slug)
  const [selectedVariantId, setSelectedVariantId] = useState(
    () => product?.variants[0]?.id ?? null
  )

  if (!product) {
    return (
      <PageWrapper>
        <div className="text-center py-24">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-xl font-bold mb-2">Product not found</h2>
          <button onClick={() => navigate('/catalogue')} className="btn-green mt-4">
            Back to Catalogue
          </button>
        </div>
      </PageWrapper>
    )
  }
  const selectedVariant = product.variants.find((v) => v.id === selectedVariantId) ?? product.variants[0]
  const hasMultipleVariants = product.variants.length > 1

  const category = getCategoryBySlug(product.category)
  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  const { image: imgSrc, imageStatus } = getProductImage(selectedVariant.id, product.category)
  const inCart = isVariantInCart(selectedVariant.id)
  const cartQty = getQty(selectedVariant.id)
  const displayPrice = selectedVariant.salePrice ?? selectedVariant.price

  const handleAdd = () => {
    addToCart(product, selectedVariant, qty)
    showToast(`Added ${qty} case${qty > 1 ? 's' : ''} to cart`)
  }

  return (
    <>
      <PageWrapper>
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-[#1A3C2B] text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-14">
          {/* Image */}
          <div className="bg-[#F5F5F5] rounded-2xl h-72 md:h-96 border border-gray-100 flex items-center justify-center p-6">
            {imageStatus === 'missing' ? (
              <div className="flex flex-col items-center gap-3 text-gray-300">
                <ImageOff className="w-14 h-14" />
                <span className="text-sm font-medium">Image coming soon</span>
              </div>
            ) : (
              <img
                src={imgSrc}
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>

          {/* Info */}
          <div>
            {/* Breadcrumb badges */}
            <div className="flex flex-wrap gap-2 mb-3">
              {category && <Badge variant="default">{category.name}</Badge>}
              {product.subcategory && (
                <Badge variant="gray">{product.subcategory.replace(/-/g, ' ')}</Badge>
              )}
              {product.origin && <Badge variant="blue">🌍 {product.origin}</Badge>}
              {product.cookState && <Badge variant="amber">⚡ {product.cookState}</Badge>}
            </div>

            {product.brand && (
              <div className="text-xs font-bold text-[#2D6A4F] uppercase tracking-widest mb-2">
                {product.brand}
              </div>
            )}

            <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-2 tracking-tight">
              {product.name}
            </h1>

            <p className="text-gray-500 text-sm leading-relaxed mb-5">{product.description}</p>

            {/* Variant selector */}
            {hasMultipleVariants ? (
              <div className="mb-5">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Select size / pack format
                </label>
                <div className="relative">
                  <select
                    value={selectedVariantId}
                    onChange={(e) => {
                      setSelectedVariantId(e.target.value)
                      setQty(1)
                    }}
                    className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-medium text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#4CAF78]/40 focus:border-[#4CAF78] cursor-pointer"
                  >
                    {product.variants.map((v) => (
                      <option key={v.id} value={v.id}>
                        {variantLabel(v)}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-400 mb-4">📦 {selectedVariant.packFormat}</div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 bg-[#E8F5EE] text-[#2D6A4F] text-xs font-medium rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Price box */}
            <div className="bg-[#E8F5EE] rounded-xl p-4 mb-5">
              {displayPrice ? (
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-bold text-[#1A3C2B]">{formatPrice(displayPrice)}</span>
                  {selectedVariant.salePrice && selectedVariant.price && (
                    <span className="text-sm text-gray-400 line-through">{formatPrice(selectedVariant.price)}</span>
                  )}
                  <span className="text-xs text-gray-500">per case</span>
                </div>
              ) : (
                <p className="text-sm text-gray-500 italic">Price available on request</p>
              )}
              <div className="text-xs text-gray-400">SKU: {selectedVariant.sku}</div>
            </div>

            {/* Quantity + Add */}
            <div className="flex items-center gap-3 flex-wrap mb-3">
              <QuantityControl value={qty} onChange={setQty} size="lg" />
              <span className="text-xs text-gray-400">cases</span>
            </div>
            <button
              onClick={handleAdd}
              className="w-full btn-green justify-center text-base py-3.5 rounded-xl"
            >
              <ShoppingCart className="w-5 h-5" />
              Add {qty} case{qty > 1 ? 's' : ''} to Cart
            </button>

            {inCart && (
              <div className="mt-3 flex items-center gap-1.5 text-sm text-[#2D6A4F] font-medium">
                <Check className="w-4 h-4" />
                Already in cart ({cartQty} case{cartQty > 1 ? 's' : ''})
              </div>
            )}

            {/* Spec table */}
            <table className="w-full mt-5 text-sm">
              <tbody>
                {[
                  selectedVariant.size && ['Size', selectedVariant.size],
                  ['Pack format', selectedVariant.packFormat],
                  product.brand && ['Brand', product.brand],
                  product.origin && ['Origin', product.origin],
                  product.cookState && ['State', product.cookState],
                  product.cut && ['Cut', product.cut],
                  ['SKU', selectedVariant.sku],
                ]
                  .filter(Boolean)
                  .map(([label, value]) => (
                    <tr key={label} className="border-b border-gray-100 last:border-0">
                      <td className="py-2 text-gray-400 w-2/5">{label}</td>
                      <td className="py-2 font-medium text-gray-800">{value}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-5">
              More in {category ? category.name : product.category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </PageWrapper>
      <Footer />
    </>
  )
}
