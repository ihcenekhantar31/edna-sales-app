import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle, AlertCircle, XCircle, Filter } from 'lucide-react'
import { products as getAllProducts } from '../../data/products'
import { productImageMap, getProductImage, getImageStats } from '../../data/productImageMap'

const STATUS_CONFIG = {
  exact:    { label: 'Exact',    color: 'bg-green-100 text-green-800',  icon: CheckCircle,   iconColor: 'text-green-500' },
  fallback: { label: 'Fallback', color: 'bg-amber-100 text-amber-800',  icon: AlertCircle,   iconColor: 'text-amber-500' },
  missing:  { label: 'Missing',  color: 'bg-red-100 text-red-800',      icon: XCircle,       iconColor: 'text-red-500'   },
}

export default function ImageAudit() {
  const navigate = useNavigate()
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterCategory, setFilterCategory] = useState('all')

  const products = getAllProducts
  const stats = getImageStats()

  const categories = [...new Set(products.map(p => p.category))].sort()

  const rows = products.map(p => {
    const { image, imageStatus, imageNote } = getProductImage(p.id, p.category)
    return { ...p, image, imageStatus, imageNote }
  })

  const filtered = rows.filter(r => {
    if (filterStatus !== 'all' && r.imageStatus !== filterStatus) return false
    if (filterCategory !== 'all' && r.category !== filterCategory) return false
    return true
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate('/admin')}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Admin
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Image Audit</h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {Object.entries(stats).map(([status, count]) => {
          const cfg = STATUS_CONFIG[status]
          const Icon = cfg.icon
          return (
            <div key={status} className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3">
              <Icon className={`w-6 h-6 ${cfg.iconColor}`} />
              <div>
                <div className="text-xl font-bold text-gray-900">{count}</div>
                <div className="text-xs text-gray-500">{cfg.label}</div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-500">Status:</span>
          {['all', 'exact', 'fallback', 'missing'].map(s => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                filterStatus === s
                  ? 'bg-[#1A3C2B] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {s === 'all' ? 'All' : STATUS_CONFIG[s].label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Category:</span>
          <select
            value={filterCategory}
            onChange={e => setFilterCategory(e.target.value)}
            className="text-xs border border-gray-200 rounded-lg px-2 py-1 focus:outline-none"
          >
            <option value="all">All categories</option>
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <span className="ml-auto text-sm text-gray-400 self-center">{filtered.length} products</span>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50 text-left">
              <th className="px-4 py-3 font-semibold text-gray-600 w-16">Image</th>
              <th className="px-4 py-3 font-semibold text-gray-600">Product</th>
              <th className="px-4 py-3 font-semibold text-gray-600">Brand</th>
              <th className="px-4 py-3 font-semibold text-gray-600">Category</th>
              <th className="px-4 py-3 font-semibold text-gray-600">SKU</th>
              <th className="px-4 py-3 font-semibold text-gray-600">Status</th>
              <th className="px-4 py-3 font-semibold text-gray-600">Note</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => {
              const cfg = STATUS_CONFIG[row.imageStatus]
              const Icon = cfg.icon
              return (
                <tr key={row.id} className={`border-b border-gray-50 ${i % 2 === 0 ? '' : 'bg-gray-50/40'}`}>
                  <td className="px-4 py-2">
                    {row.image ? (
                      <img
                        src={row.image}
                        alt={row.name}
                        className="w-12 h-12 object-contain rounded border border-gray-100 bg-gray-50"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded border border-gray-100 bg-gray-50 flex items-center justify-center">
                        <XCircle className="w-5 h-5 text-gray-300" />
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    <div className="font-medium text-gray-900 leading-snug">{row.name}</div>
                    <div className="text-xs text-gray-400">{row.unit}</div>
                  </td>
                  <td className="px-4 py-2 text-gray-600">{row.brand || '—'}</td>
                  <td className="px-4 py-2 text-gray-600 capitalize">{row.category}</td>
                  <td className="px-4 py-2 text-gray-400 font-mono text-xs">{row.sku}</td>
                  <td className="px-4 py-2">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${cfg.color}`}>
                      <Icon className="w-3 h-3" />
                      {cfg.label}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-xs text-gray-500 max-w-xs">{row.imageNote}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
