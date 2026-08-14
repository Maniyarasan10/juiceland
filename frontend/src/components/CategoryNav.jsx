import { CATEGORIES } from '../data/menuData'

export default function CategoryNav({ active, onSelect }) {
  return (
    <nav className="catnav" aria-label="Menu categories">
      <div className="catnav__scroller" role="tablist" aria-label="Menu categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={active === cat.id}
            className={`catnav__pill ${active === cat.id ? 'catnav__pill--active' : ''}`}
            onClick={() => onSelect(cat.id)}
          >
            <span className="catnav__emoji" aria-hidden="true">
              {cat.emoji}
            </span>
            {cat.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
