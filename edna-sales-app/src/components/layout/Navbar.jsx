import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ShoppingCart, Search, Menu, X, LogOut } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { useRole } from '../../context/RoleContext'

export default function Navbar() {
  const { totalItems } = useCart()
  const { role, clearRole } = useRole()
  const navigate = useNavigate()
  const location = useLocation()
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const inputRef = useRef(null)

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const customerLinks = [
    { label: 'Catalogue', to: '/catalogue' },
    { label: 'Categories', to: '/categories' },
  ]

  const isActive = (to) => location.pathname === to

  return (
    <nav className="sticky top-0 z-50 bg-[#1A3C2B] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center h-16 gap-3">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-xl tracking-tight flex-shrink-0 mr-2">
            EDNA<span className="text-[#4CAF78]">.</span>
          </Link>

          {/* Role badge */}
          {role && (
            <span className={`hidden sm:inline-flex text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex-shrink-0 ${
              role === 'admin'
                ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                : 'bg-[#4CAF78]/20 text-[#4CAF78] border border-[#4CAF78]/30'
            }`}>
              {role}
            </span>
          )}

          {/* Search — customer only */}
          {role === 'customer' && (
            <form onSubmit={handleSearch} className="flex-1 max-w-sm relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, brands…"
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
              />
            </form>
          )}

          {/* Desktop nav links */}
          {role === 'customer' && (
            <div className="hidden md:flex items-center gap-1 ml-auto">
              {customerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    isActive(link.to)
                      ? 'bg-white/20 text-white'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2 ml-auto">
            {/* Cart — customer only */}
            {role === 'customer' && (
              <Link
                to="/cart"
                className="flex items-center gap-2 bg-[#4CAF78] hover:bg-[#3da365] text-white text-sm font-semibold px-3 py-2 rounded-lg transition-all flex-shrink-0"
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden sm:inline">Cart</span>
                <span className="bg-white text-[#1A3C2B] text-xs font-bold rounded-full px-2 py-0.5 min-w-[22px] text-center">
                  {totalItems}
                </span>
              </Link>
            )}

            {/* Switch role */}
            <button
              onClick={clearRole}
              title="Switch role"
              className="flex items-center gap-1.5 text-white/60 hover:text-white text-xs px-2.5 py-2 rounded-lg hover:bg-white/10 transition-all flex-shrink-0"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Switch</span>
            </button>
          </div>

          {/* Mobile menu button */}
          {role === 'customer' && (
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>

        {/* Mobile menu */}
        {menuOpen && role === 'customer' && (
          <div className="md:hidden pb-4 space-y-2 border-t border-white/10 pt-3">
            <form onSubmit={handleSearch} className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products…"
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none"
              />
            </form>
            {customerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
