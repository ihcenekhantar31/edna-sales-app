import { useNavigate } from 'react-router-dom'

export default function EmptyState({ icon = '📭', title, description, actionLabel, actionTo }) {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
      <div className="text-6xl mb-5">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      {description && <p className="text-gray-500 text-sm max-w-xs mb-6">{description}</p>}
      {actionLabel && actionTo && (
        <button
          onClick={() => navigate(actionTo)}
          className="btn-green"
        >
          {actionLabel}
        </button>
      )}
    </div>
  )
}
