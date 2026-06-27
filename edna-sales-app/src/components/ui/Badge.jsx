export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-[#E8F5EE] text-[#2D6A4F]',
    green: 'bg-[#1A3C2B] text-white',
    amber: 'bg-amber-100 text-amber-800',
    red: 'bg-red-100 text-red-700',
    gray: 'bg-gray-100 text-gray-600',
    blue: 'bg-blue-50 text-blue-700',
  }
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  )
}
