import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Check, ShoppingCart } from 'lucide-react'
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
import { getProductImage } from '../data/productImages'

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addToCart, isInCart, getQty } = useCart()
  const { showToast } = useToast()
  const [qty, setQty] = useState(1)

  const product = getProductBySlug(slug)

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

  const category = getCategoryBySlug(product.category)
  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4)
  const imgSrc = getProductImage(product.id, product.category)
  const inCart = isInCart(product.id)
  const cartQty = getQty(product.id)
  const displayPrice = product.salePrice ?? product.price

  const handleAdd = () => {
    addToCart(product, qty)
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
          <div className="bg-gradient-to-br from-[#E8F5EE] to-[#d1e8d5] rounded-2xl h-72 md:h-80 overflow-hidden border border-gray-200">
            {imgSrc ? (
              <img src={imgSrc} alt={product.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <ShoppingCart className="w-16 h-16 text-[#4CAF78]/30" />
              </div>
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

            <div className="text-sm text-gray-400 mb-4">📦 {product.unit}</div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">{product.description}</p>

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
                  {product.salePrice && product.price && (
                    <span className="text-sm text-gray-400 line-through">{formatPrice(product.price)}</span>
                  )}
                  <span className="text-xs text-gray-500">per case</span>
                </div>
              ) : (
                <p className="text-sm text-gray-500 italic">Price available on request</p>
              )}
              <div className="text-xs text-gray-400">SKU: {product.sku}</div>
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
                  product.size && ['Size', product.size],
                  ['Pack format', product.unit],
                  product.brand && ['Brand', product.brand],
                  product.origin && ['Origin', product.origin],
                  product.cookState && ['State', product.cookState],
                  product.cut && ['Cut', product.cut],
                  ['SKU', product.sku],
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
