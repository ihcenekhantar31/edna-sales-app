import { useRole } from '../context/RoleContext'
import { ShoppingCart, LayoutDashboard } from 'lucide-react'

export default function RoleSelect() {
  const { selectRole } = useRole()

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="mb-10 text-center">
        <div className="text-4xl font-bold text-[#1A3C2B] tracking-tight mb-1">
          EDNA<span className="text-[#4CAF78]">.</span>
        </div>
        <p className="text-gray-500 text-sm">Premium Food Distribution</p>
      </div>

      <div className="w-full max-w-sm">
        <h1 className="text-xl font-bold text-gray-900 text-center mb-2">Welcome back</h1>
        <p className="text-gray-500 text-sm text-center mb-8">Choose how you'd like to continue</p>

        <div className="space-y-3">
          <button
            onClick={() => selectRole('customer')}
            className="w-full flex items-center gap-4 bg-white border-2 border-gray-200 hover:border-[#4CAF78] hover:bg-[#E8F5EE]/40 rounded-2xl p-5 text-left transition-all duration-200 group"
          >
            <div className="w-12 h-12 bg-[#E8F5EE] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#4CAF78]/20 transition-colors">
              <ShoppingCart className="w-6 h-6 text-[#2D6A4F]" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Customer</div>
              <div className="text-sm text-gray-500 mt-0.5">Browse products and place orders</div>
            </div>
          </button>

          <button
            onClick={() => selectRole('admin')}
            className="w-full flex items-center gap-4 bg-white border-2 border-gray-200 hover:border-[#1A3C2B] hover:bg-gray-50 rounded-2xl p-5 text-left transition-all duration-200 group"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gray-200 transition-colors">
              <LayoutDashboard className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Admin</div>
              <div className="text-sm text-gray-500 mt-0.5">Manage orders, products, and revenue</div>
            </div>
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          EDNA Sales App · Internal use only
        </p>
      </div>
    </div>
  )
}
