import { Link } from 'react-router-dom'
import { APP_CONFIG } from '../../config/app'

export default function Footer() {
  return (
    <footer className="bg-[#1A3C2B] text-white/60 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-white font-bold text-xl mb-3">
              EDNA<span className="text-[#4CAF78]">.</span>
            </div>
            <p className="text-sm leading-relaxed">{APP_CONFIG.description}</p>
          </div>
          <div>
            <div className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Navigate</div>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-white transition-colors">Home</Link>
              <Link to="/catalogue" className="block hover:text-white transition-colors">Catalogue</Link>
              <Link to="/categories" className="block hover:text-white transition-colors">Categories</Link>
              <Link to="/cart" className="block hover:text-white transition-colors">Cart</Link>
              <Link to="/admin" className="block hover:text-white transition-colors">Admin Demo</Link>
            </div>
          </div>
          <div>
            <div className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Contact</div>
            <div className="space-y-2 text-sm">
              <div>{APP_CONFIG.company.address}</div>
              <div>{APP_CONFIG.company.phone}</div>
              <div>{APP_CONFIG.company.email}</div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div>© {new Date().getFullYear()} EDNA Food Distribution. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Built with React · Vite · Tailwind CSS</span>
            {APP_CONFIG.github && (
              <a href={APP_CONFIG.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
