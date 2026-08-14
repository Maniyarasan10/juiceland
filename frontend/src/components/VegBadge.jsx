export default function VegBadge({ type, size = 'small' }) {
  const isVeg = type === 'veg'
  const label = isVeg ? 'Vegetarian' : 'Non-vegetarian'
  return (
    <span
      className={`vegbadge ${isVeg ? 'vegbadge--veg' : 'vegbadge--nonveg'} vegbadge--${size}`}
      title={label}
      aria-label={label}
      role="img"
    >
      <span className="vegbadge__dot" aria-hidden="true" />
    </span>
  )
}
