import PageWrapper from '../components/layout/PageWrapper'
import Footer from '../components/layout/Footer'

const STATS = [
  { label: 'Total Orders (March)', value: '87', sub: '↑ +12% vs February' },
  { label: 'Revenue (MTD)', value: '$48,240', sub: '↑ +8.4% vs last month' },
  { label: 'Active Customers', value: '34', sub: '4 new this month' },
  { label: 'Avg Order Value', value: '$554', sub: '↑ up from $487' },
  { label: 'Pending Orders', value: '6', sub: 'Needs confirmation' },
  { label: 'Top Category', value: 'Shrimp', sub: '42% of sales' },
]

const ORDERS = [
  { id: 'ORD-2024-087', customer: 'Restaurant Azur', items: 3, total: '$842.50', status: 'confirmed', date: '2024-03-14' },
  { id: 'ORD-2024-086', customer: 'Épicerie Nour', items: 5, total: '$1,234.00', status: 'sent', date: '2024-03-13' },
  { id: 'ORD-2024-085', customer: 'Catering Pro MTL', items: 8, total: '$3,670.00', status: 'confirmed', date: '2024-03-12' },
  { id: 'ORD-2024-084', customer: 'Hotel Le Sherbrooke', items: 2, total: '$445.00', status: 'pending', date: '2024-03-11' },
  { id: 'ORD-2024-083', customer: 'Boucherie Halal Plus', items: 6, total: '$918.75', status: 'confirmed', date: '2024-03-10' },
  { id: 'ORD-2024-082', customer: 'Sushi Tako', items: 4, total: '$2,100.00', status: 'sent', date: '2024-03-09' },
]

const CAT_SALES = [
  { name: 'Shrimp', pct: 42 },
  { name: 'Fish & Seafood', pct: 28 },
  { name: 'Frozen Vegetables', pct: 16 },
  { name: 'Prepared Foods', pct: 10 },
  { name: 'Confectionery', pct: 4 },
]

const MONTHLY = [
  { month: 'Oct', value: 32000, pct: 66 },
  { month: 'Nov', value: 38000, pct: 79 },
  { month: 'Dec', value: 44000, pct: 91 },
  { month: 'Jan', value: 39000, pct: 81 },
  { month: 'Feb', value: 44500, pct: 92 },
  { month: 'Mar*', value: 48240, pct: 100 },
]

const statusStyle = {
  confirmed: 'bg-emerald-100 text-emerald-800',
  pending: 'bg-amber-100 text-amber-800',
  sent: 'bg-blue-100 text-blue-800',
}

export default function AdminDemo() {
  return (
    <>
      <PageWrapper>
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Admin Dashboard</h1>
            <p className="text-gray-500 text-sm mt-1">Demo — order data, revenue summary, product insights</p>
          </div>
          <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
            Demo Mode
          </span>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {STATS.map((s) => (
            <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{s.label}</div>
              <div className="text-xl font-bold text-gray-900 leading-none mb-1">{s.value}</div>
              <div className="text-xs text-[#2D6A4F] font-medium">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Sales by category */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-5">Sales by Category</h3>
            <div className="space-y-3">
              {CAT_SALES.map((c) => (
                <div key={c.name} className="flex items-center gap-3">
                  <div className="text-sm text-gray-700 w-36 flex-shrink-0">{c.name}</div>
                  <div className="flex-1 bg-[#E8F5EE] rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-[#2D6A4F] h-2 rounded-full transition-all"
                      style={{ width: `${c.pct}%` }}
                    />
                  </div>
                  <div className="text-xs font-semibold text-gray-500 w-8 text-right">{c.pct}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly revenue */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-5">Monthly Revenue</h3>
            <div className="space-y-3">
              {MONTHLY.map((m) => (
                <div key={m.month} className="flex items-center gap-3">
                  <div className="text-sm text-gray-700 w-12 flex-shrink-0 font-medium">{m.month}</div>
                  <div className="flex-1 bg-[#E8F5EE] rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-[#2D6A4F] h-2 rounded-full transition-all"
                      style={{ width: `${m.pct}%` }}
                    />
                  </div>
                  <div className="text-xs font-semibold text-gray-500 w-12 text-right">
                    ${Math.round(m.value / 1000)}k
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent orders table */}
        <div className="mb-4">
          <h3 className="font-semibold text-gray-900 mb-4">Recent Orders</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  {['Order ID', 'Customer', 'Items', 'Total', 'Status', 'Date'].map((h) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ORDERS.map((order, i) => (
                  <tr
                    key={order.id}
                    className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}
                  >
                    <td className="px-4 py-3 font-mono text-xs text-gray-500">{order.id}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">{order.customer}</td>
                    <td className="px-4 py-3 text-gray-500">{order.items} products</td>
                    <td className="px-4 py-3 font-bold text-[#1A3C2B]">{order.total}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusStyle[order.status] || ''}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Future note */}
        <div className="bg-[#E8F5EE] border border-[#4CAF78]/40 rounded-xl p-4 text-sm text-[#1A3C2B]">
          <strong>Future connection:</strong> This dashboard is designed to connect to an EDNA Operations Dashboard
          with invoice generation, QuickBooks export, supplier payments, customer payment tracking, and weekly business
          summaries.
        </div>
      </PageWrapper>
      <Footer />
    </>
  )
}
