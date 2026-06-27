import HeroSection from '../components/sections/HeroSection'
import CategoryGrid from '../components/sections/CategoryGrid'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import WhatsAppBanner from '../components/sections/WhatsAppBanner'
import Footer from '../components/layout/Footer'

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Shop by Category</h2>
              <p className="text-gray-500 text-sm mt-1">Find exactly what your kitchen needs</p>
            </div>
          </div>
          <CategoryGrid />
        </div>
      </section>

      <FeaturedProducts />
      <WhatsAppBanner />
      <Footer />
    </>
  )
}
