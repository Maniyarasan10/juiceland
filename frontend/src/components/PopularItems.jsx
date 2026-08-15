import { Flame } from 'lucide-react'
import { POPULAR_ITEMS, getItemById, formatPrice } from '../data/menuData'
import VegBadge from './VegBadge'

export default function PopularItems({ onSelect }) {
  const items = POPULAR_ITEMS.map((p) => getItemById(p.id)).filter(Boolean)
  if (items.length === 0) return null
  return (
    <section className="popular" aria-labelledby="popular-title">
      <div className="popular__head">
        <h2 className="popular__title" id="popular-title">
          <Flame size={20} strokeWidth={2.4} className="popular__flame" aria-hidden="true" />
          Popular at Juice Land
        </h2>
      </div>
      <div className="popular__scroller">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className="popular__card"
            style={{ '--i': i }}
            onClick={() => onSelect(item)}
            aria-label={`${item.name}, ${formatPrice(item.price)}`}
          >
            <span className="popular__imgwrap">
              <img
                className="popular__img"
                src={item.image}
                alt={item.name}
                width="120"
                height="120"
                fetchPriority="low"
                decoding="async"
              />
              <VegBadge type={item.type} size="tiny" />
            </span>
            <span className="popular__info">
              <span className="popular__name">{item.name}</span>
              <span className="popular__price">{formatPrice(item.price)}</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
