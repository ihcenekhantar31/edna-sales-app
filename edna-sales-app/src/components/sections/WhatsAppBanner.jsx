import { useNavigate } from 'react-router-dom'

export default function WhatsAppBanner() {
  const navigate = useNavigate()
  return (
    <section className="bg-[#1A3C2B] py-14 px-6 text-center">
      <div className="max-w-xl mx-auto">
        <div className="text-4xl mb-4">📱</div>
        <h2 className="text-2xl font-bold text-white mb-3">Order through WhatsApp</h2>
        <p className="text-white/65 mb-7 text-sm leading-relaxed">
          Build your cart, fill in your details, and send your order directly to EDNA. Fast, simple, no account needed.
        </p>
        <button
          onClick={() => navigate('/catalogue')}
          className="btn-primary text-base px-8 py-3.5"
        >
          Start Your Order →
        </button>
      </div>
    </section>
  )
}
