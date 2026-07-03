import { useNavigate } from 'react-router-dom'
import { ArrowRight, ShoppingCart } from 'lucide-react'

export default function HeroSection() {
  const navigate = useNavigate()
  return (
    <section className="bg-gradient-to-br from-[#1A3C2B] to-[#2D6A4F] py-20 px-6 relative overflow-hidden">
      {/* subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 bg-[#4CAF78]/20 border border-[#4CAF78]/30 text-[#4CAF78] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
          Premium Food Distribution
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5 tracking-tight">
          Fresh supply,{' '}
          <span className="text-[#4CAF78]">direct to your business.</span>
        </h1>

        <p className="text-lg text-white/65 mb-9 max-w-xl mx-auto leading-relaxed">
          Quality seafood, frozen vegetables, and specialty foods — ordered in minutes through WhatsApp Business.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => navigate('/catalogue')}
            className="btn-primary text-base px-7 py-3.5"
          >
            Browse Catalogue
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => navigate('/cart')}
            className="btn-outline text-base px-7 py-3.5"
          >
            <ShoppingCart className="w-4 h-4" />
            View Cart
          </button>
        </div>

        <div className="mt-14 flex flex-wrap gap-8 justify-center">
          {[
            { value: '200+', label: 'Products' },
            { value: '25+', label: 'Brands' },
            { value: '5', label: 'Categories' },
            { value: 'WhatsApp', label: 'Order flow' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/45 mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
