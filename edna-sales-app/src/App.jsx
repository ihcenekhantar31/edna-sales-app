import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import { CartProvider } from './context/CartContext'
import { ToastProvider } from './components/ui/Toast'
import { RoleProvider, useRole } from './context/RoleContext'
import RoleSelect from './pages/RoleSelect'
import Home from './pages/Home'
import Catalogue from './pages/Catalogue'
import Categories from './pages/Categories'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import SearchResults from './pages/SearchResults'
import AdminDemo from './pages/AdminDemo'
import ImageAudit from './pages/admin/ImageAudit'

function AppRoutes() {
  const { role } = useRole()

  if (!role) return <RoleSelect />

  if (role === 'admin') {
    return (
      <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
        <Navbar />
        <Routes>
          <Route path="/admin" element={<AdminDemo />} />
          <Route path="/admin/image-audit" element={<ImageAudit />} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <RoleProvider>
      <CartProvider>
        <ToastProvider>
          <AppRoutes />
        </ToastProvider>
      </CartProvider>
    </RoleProvider>
  )
}
