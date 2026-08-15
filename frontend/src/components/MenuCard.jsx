import VegBadge from './VegBadge'
import { formatPrice } from '../data/menuData'

export default function MenuCard({ item, index, onSelect }) {
  return (
    <button
      type="button"
      className="menucard"
      style={{ '--i': index % 12 }}
      onClick={() => onSelect(item)}
      aria-label={`${item.name}, ${formatPrice(item.price)}`}
    >
      <span className={'menucard__imgwrap' + (item.imgZoom ? ' menucard__imgwrap--zoom' : '')}>
        <img
          className="menucard__img"
          src={item.image}
          style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
          alt={item.name}
          width="320"
          height="240"
          fetchPriority="low"
          decoding="async"
        />
        <VegBadge type={item.type} size="small" />
      </span>
      <span className="menucard__body">
        <span className="menucard__name">{item.name}</span>
        <span className="menucard__desc">{item.description}</span>
        <span className="menucard__foot">
          <span className="menucard__price">{formatPrice(item.price)}</span>
          {item.addon && (
            <span className="menucard__addon">
              {item.addon.label} <b>+₹{item.addon.price}</b>
            </span>
          )}
        </span>
      </span>
    </button>
  )
}
