import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import { CartProvider } from './context/CartContext'
import { ToastProvider } from './components/ui/Toast'
import Home from './pages/Home'
import Catalogue from './pages/Catalogue'
import Categories from './pages/Categories'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import SearchResults from './pages/SearchResults'
import AdminDemo from './pages/AdminDemo'

export default function App() {
  return (
    <CartProvider>
      <ToastProvider>
        <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/admin" element={<AdminDemo />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </ToastProvider>
    </CartProvider>
  )
}
