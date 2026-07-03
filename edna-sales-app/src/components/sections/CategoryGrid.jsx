import { useNavigate } from 'react-router-dom'
import { categories } from '../../data/categories'
import { products } from '../../data/products'

export default function CategoryGrid() {
  const navigate = useNavigate()
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {categories.map((cat) => {
        const count = products.filter((p) => p.category === cat.slug).length
        return (
          <div
            key={cat.id}
            onClick={() => navigate(`/catalogue?category=${cat.slug}`)}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#4CAF78]/50 group"
          >
            <div className="h-28 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-3 text-center">
              <div className="text-sm font-semibold text-gray-900">{cat.name}</div>
              <div className="text-xs text-gray-400 mt-0.5">{count} products</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
