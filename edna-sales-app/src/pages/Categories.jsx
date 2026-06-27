import { useNavigate } from 'react-router-dom'
import PageWrapper from '../components/layout/PageWrapper'
import ProductCard from '../components/ui/ProductCard'
import Footer from '../components/layout/Footer'
import { categories } from '../data/categories'
import { getProductsByCategory } from '../data/products'

export default function Categories() {
  const navigate = useNavigate()

  return (
    <>
      <PageWrapper>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">All Categories</h1>
          <p className="text-gray-500 text-sm mt-1">Browse our complete product range</p>
        </div>

        <div className="space-y-14">
          {categories.map((cat) => {
            const catProducts = getProductsByCategory(cat.slug)
            const preview = catProducts.slice(0, 4)
            return (
              <div key={cat.id}>
                <div className="flex items-center gap-4 mb-5 flex-wrap">
                  <span className="text-4xl">{cat.icon}</span>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900">{cat.name}</h2>
                    <p className="text-gray-500 text-sm">{cat.description}</p>
                  </div>
                  <button
                    onClick={() => navigate(`/catalogue?category=${cat.slug}`)}
                    className="text-sm font-semibold text-[#2D6A4F] hover:text-[#1A3C2B] whitespace-nowrap transition-colors"
                  >
                    See all {catProducts.length} →
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {preview.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </PageWrapper>
      <Footer />
    </>
  )
}
