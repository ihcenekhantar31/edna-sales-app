import { useSearchParams, useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import { ArrowLeft } from 'lucide-react'
import PageWrapper from '../components/layout/PageWrapper'
import ProductCard from '../components/ui/ProductCard'
import EmptyState from '../components/ui/EmptyState'
import Footer from '../components/layout/Footer'
import { searchProducts } from '../data/products'

export default function SearchResults() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const query = searchParams.get('q') || ''

  const results = useMemo(() => searchProducts(query), [query])

  return (
    <>
      <PageWrapper>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-[#1A3C2B] text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Search Results</h1>
          <p className="text-gray-500 text-sm mt-1">
            {results.length > 0
              ? <>Found <strong className="text-gray-800">{results.length} product{results.length !== 1 ? 's' : ''}</strong> for &ldquo;<strong className="text-gray-800">{query}</strong>&rdquo;</>
              : <>No results for &ldquo;<strong>{query}</strong>&rdquo;</>}
          </p>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon="🔍"
            title="No products found"
            description="Try searching for a product name, brand, category, or origin."
            actionLabel="Browse all products"
            actionTo="/catalogue"
          />
        )}
      </PageWrapper>
      <Footer />
    </>
  )
}
