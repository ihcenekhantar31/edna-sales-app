import { Minus, Plus } from 'lucide-react'

export default function QuantityControl({ value, onChange, min = 1, max = 999, size = 'md' }) {
  const sizes = {
    sm: { btn: 'w-7 h-7', num: 'w-9 h-7 text-sm', icon: 'w-3 h-3' },
    md: { btn: 'w-9 h-9', num: 'w-11 h-9 text-sm', icon: 'w-4 h-4' },
    lg: { btn: 'w-10 h-10', num: 'w-14 h-10 text-base', icon: 'w-4 h-4' },
  }
  const s = sizes[size] || sizes.md

  return (
    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white w-fit">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className={`${s.btn} flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors`}
      >
        <Minus className={s.icon} />
      </button>
      <div className={`${s.num} flex items-center justify-center font-semibold text-gray-900 border-x border-gray-200`}>
        {value}
      </div>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className={`${s.btn} flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors`}
      >
        <Plus className={s.icon} />
      </button>
    </div>
  )
}
