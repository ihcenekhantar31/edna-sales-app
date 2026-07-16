import { useNavigate } from 'react-router-dom'
import { Plus, Check, Package, ImageOff, ChevronRight } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/helpers'
import { getProductImage } from '../../data/productImageMap'

export default function ProductCard({ product }) {
  const { addToCart, isInCart } = useCart()
  const navigate = useNavigate()
  const inCart = isInCart(product.id)

  const defaultVariant = product.variants[0]
  const hasMultipleVariants = product.variants.length > 1
  const displayPrice = defaultVariant.salePrice ?? defaultVariant.price
  const { image: imgSrc, imageStatus } = getProductImage(defaultVariant.id, product.category)

  const handleAdd = (e) => {
    e.stopPropagation()
    if (hasMultipleVariants) {
      navigate(`/product/${product.slug}`)
    } else {
      addToCart(product, defaultVariant, 1)
    }
  }

  return (
    <div
      onClick={() => navigate(`/product/${product.slug}`)}
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#4CAF78]/50 flex flex-col group"
    >
      {/* Image area */}
      <div className="relative h-36 bg-[#F5F5F5] overflow-hidden flex-shrink-0">
        {product.featured && (
          <span className="absolute top-2.5 left-2.5 z-10 bg-amber-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
            Featured
          </span>
        )}
        {hasMultipleVariants && (
          <span className="absolute top-2.5 right-2.5 z-10 bg-[#1A3C2B] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
            {product.variants.length} sizes
          </span>
        )}
        {defaultVariant.salePrice && (
          <span className="absolute top-2.5 right-2.5 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
            Sale
          </span>
        )}

        {imageStatus === 'missing' ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-1 text-gray-300">
            <ImageOff className="w-8 h-8" />
            <span className="text-[10px]">Image coming soon</span>
          </div>
        ) : (
          <img
            src={imgSrc}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        )}
      </div>

      {/* Info */}
      <div className="p-3.5 flex flex-col flex-1">
        {product.brand && (
          <div className="text-[10px] font-bold text-[#2D6A4F] uppercase tracking-wider mb-1">
            {product.brand}
          </div>
        )}
        <div className="text-sm font-semibold text-gray-900 leading-snug mb-1.5 flex-1 line-clamp-2">
          {product.name}
        </div>
        <div className="text-xs text-gray-400 mb-3 flex items-center gap-1">
          <Package className="w-3 h-3" />
          {hasMultipleVariants
            ? `${product.variants.length} sizes available`
            : defaultVariant.packFormat}
        </div>

        <div className="flex items-center justify-between gap-2 mt-auto">
          <div>
            {displayPrice ? (
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm font-bold text-[#1A3C2B]">
                  {formatPrice(displayPrice)}
                </span>
                {defaultVariant.salePrice && defaultVariant.price && (
                  <span className="text-xs text-gray-400 line-through">
                    {formatPrice(defaultVariant.price)}
                  </span>
                )}
              </div>
            ) : (
              <span className="text-xs text-gray-400 italic">Price on request</span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all flex-shrink-0 border ${
              inCart
                ? 'bg-[#E8F5EE] text-[#2D6A4F] border-[#2D6A4F]/30'
                : 'bg-[#1A3C2B] text-white border-transparent hover:bg-[#2D6A4F]'
            }`}
          >
            {inCart ? (
              <>
                <Check className="w-3 h-3" />
                Added
              </>
            ) : hasMultipleVariants ? (
              <>
                Select
                <ChevronRight className="w-3 h-3" />
              </>
            ) : (
              <>
                <Plus className="w-3 h-3" />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
