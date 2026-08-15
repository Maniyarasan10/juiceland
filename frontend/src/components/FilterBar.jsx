import { SlidersHorizontal, Leaf, Drumstick, X } from 'lucide-react'
import { CATEGORIES } from '../data/menuData'
import { PRICE_FILTERS, TYPE_FILTERS, isFiltering } from '../utils/search'

const CATEGORY_CHIPS = CATEGORIES.slice(1)

export default function FilterBar({ filters, onChange, count }) {
  const active = isFiltering(filters)

  const setFilter = (key, value) => onChange({ ...filters, [key]: value })
  const reset = () => onChange({ category: 'all', type: 'all', price: 'all' })

  const typeIcon = (id) =>
    id === 'veg' ? <Leaf size={14} strokeWidth={2.5} /> : id === 'nonveg' ? <Drumstick size={14} strokeWidth={2.5} /> : null

  return (
    <div className="filterbar">
      <div className="filterbar__head">
        <span className="filterbar__title">
          <SlidersHorizontal size={16} strokeWidth={2.4} aria-hidden="true" />
          Filters
        </span>
        <span className="filterbar__count" aria-live="polite">
          {count} {count === 1 ? 'item' : 'items'}
        </span>
        {active && (
          <button type="button" className="filterbar__reset" onClick={reset}>
            <X size={13} strokeWidth={2.6} aria-hidden="true" />
            Clear all
          </button>
        )}
      </div>

      <div className="filterbar__group">
        <span className="filterbar__label">Category</span>
        <div className="filterbar__chips" role="group" aria-label="Filter by category">
          <button
            type="button"
            className={`filterbar__chip ${filters.category === 'all' ? 'filterbar__chip--active' : ''}`}
            onClick={() => setFilter('category', 'all')}
            aria-pressed={filters.category === 'all'}
          >
            All
          </button>
          {CATEGORY_CHIPS.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filterbar__chip ${filters.category === cat.id ? 'filterbar__chip--active' : ''}`}
              onClick={() => setFilter('category', cat.id)}
              aria-pressed={filters.category === cat.id}
            >
              <img className="filterbar__chip-img" src={cat.img} alt="" decoding="async" />
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filterbar__group">
        <span className="filterbar__label">Type</span>
        <div className="filterbar__chips" role="group" aria-label="Filter by type">
          {TYPE_FILTERS.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`filterbar__chip filterbar__chip--type ${filters.type === t.id ? 'filterbar__chip--active' : ''}`}
              onClick={() => setFilter('type', t.id)}
              aria-pressed={filters.type === t.id}
            >
              {typeIcon(t.id)}
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filterbar__group">
        <span className="filterbar__label">Price</span>
        <div className="filterbar__chips" role="group" aria-label="Filter by price">
          {PRICE_FILTERS.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`filterbar__chip ${filters.price === p.id ? 'filterbar__chip--active' : ''}`}
              onClick={() => setFilter('price', p.id)}
              aria-pressed={filters.price === p.id}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
