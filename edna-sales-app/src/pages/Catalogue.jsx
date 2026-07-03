import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import PageWrapper from '../components/layout/PageWrapper'
import ProductCard from '../components/ui/ProductCard'
import FilterChip from '../components/ui/FilterChip'
import EmptyState from '../components/ui/EmptyState'
import Footer from '../components/layout/Footer'
import { products, getSubcategories } from '../data/products'
import { categories } from '../data/categories'
import { formatSubcategory } from '../utils/helpers'

export default function Catalogue() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all')
  const [activeSubcat, setActiveSubcat] = useState('all')
  const [sort, setSort] = useState('')

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) {
      setActiveCategory(cat)
      setActiveSubcat('all')
    }
  }, [searchParams])

  const subcats = useMemo(() => getSubcategories(activeCategory === 'all' ? null : activeCategory), [activeCategory])

  const filtered = useMemo(() => {
    let pool = activeCategory === 'all' ? products : products.filter((p) => p.category === activeCategory)
    if (activeSubcat !== 'all') pool = pool.filter((p) => p.subcategory === activeSubcat)
    if (sort === 'name-asc') pool = [...pool].sort((a, b) => a.name.localeCompare(b.name))
    if (sort === 'name-desc') pool = [...pool].sort((a, b) => b.name.localeCompare(a.name))
    if (sort === 'brand') pool = [...pool].sort((a, b) => (a.brand || '').localeCompare(b.brand || ''))
    if (sort === 'featured') pool = [...pool].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    return pool
  }, [activeCategory, activeSubcat, sort])

  const handleCatChange = (slug) => {
    setActiveCategory(slug)
    setActiveSubcat('all')
    if (slug === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category: slug })
    }
  }

  const catObj = categories.find((c) => c.slug === activeCategory)

  return (
    <>
      <PageWrapper>
        {/* Header */}
        <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              {catObj ? catObj.name : 'Product Catalogue'}
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              {filtered.length} product{filtered.length !== 1 ? 's' : ''} available
            </p>
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-gray-400" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:border-[#2D6A4F] cursor-pointer"
            >
              <option value="">Sort by</option>
              <option value="name-asc">Name A–Z</option>
              <option value="name-desc">Name Z–A</option>
              <option value="brand">Brand</option>
              <option value="featured">Featured first</option>
            </select>
          </div>
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2 mb-3">
          <FilterChip
            label={`All (${products.length})`}
            active={activeCategory === 'all'}
            onClick={() => handleCatChange('all')}
          />
          {categories.map((cat) => {
            const count = products.filter((p) => p.category === cat.slug).length
            return (
              <FilterChip
                key={cat.id}
                label={`${cat.name} (${count})`}
                active={activeCategory === cat.slug}
                onClick={() => handleCatChange(cat.slug)}
              />
            )
          })}
        </div>

        {/* Subcategory chips */}
        {subcats.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-xs font-semibold text-gray-500 self-center mr-1">Filter:</span>
            <FilterChip label="All" active={activeSubcat === 'all'} onClick={() => setActiveSubcat('all')} />
            {subcats.map((sub) => (
              <FilterChip
                key={sub}
                label={formatSubcategory(sub)}
                active={activeSubcat === sub}
                onClick={() => setActiveSubcat(sub)}
              />
            ))}
          </div>
        )}

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon="🔍"
            title="No products found"
            description="Try a different category or search term."
            actionLabel="View all products"
            actionTo="/catalogue"
          />
        )}
      </PageWrapper>
      <Footer />
    </>
  )
}
