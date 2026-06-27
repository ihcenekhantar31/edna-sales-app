import { useNavigate } from 'react-router-dom'
import ProductCard from '../ui/ProductCard'
import { getFeaturedProducts } from '../../data/products'

export default function FeaturedProducts() {
  const navigate = useNavigate()
  const featured = getFeaturedProducts().slice(0, 8)

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Featured Products</h2>
            <p className="text-gray-500 text-sm mt-1">Handpicked for quality and value</p>
          </div>
          <button
            onClick={() => navigate('/catalogue')}
            className="text-sm font-semibold text-[#2D6A4F] hover:text-[#1A3C2B] flex items-center gap-1 transition-colors"
          >
            See all products →
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
