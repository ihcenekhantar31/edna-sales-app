export default function FilterChip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-full border text-sm font-medium transition-all whitespace-nowrap ${
        active
          ? 'bg-[#1A3C2B] text-white border-[#1A3C2B]'
          : 'bg-white text-gray-500 border-gray-200 hover:border-[#2D6A4F] hover:text-[#2D6A4F]'
      }`}
    >
      {label}
    </button>
  )
}
