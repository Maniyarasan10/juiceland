import { getCategoryLabel } from '../data/menuData'
import MenuCard from './MenuCard'

export default function MenuSection({ categoryId, items, onSelect, sectionRef }) {
  const label = getCategoryLabel(categoryId)
  return (
    <section
      id={`menu-${categoryId}`}
      className="menusection"
      data-category={categoryId}
      ref={sectionRef}
      aria-labelledby={`menu-${categoryId}-title`}
    >
      <div className="menusection__head">
        <h2 className="menusection__title" id={`menu-${categoryId}-title`}>
          <span className="menusection__badge" aria-hidden="true">
            {CATEGORY_EMOJI[categoryId] || '·'}
          </span>
          {label}
        </h2>
        <span className="menusection__count" aria-label={`${items.length} items`}>
          {items.length} {items.length === 1 ? 'item' : 'items'}
        </span>
      </div>
      <div className="menusection__grid">
        {items.map((item, i) => (
          <MenuCard key={item.id} item={item} index={i} onSelect={onSelect} />
        ))}
      </div>
    </section>
  )
}

const CATEGORY_EMOJI = {
  'tea-coffee': '🍵',
  'fresh-juices': '🍊',
  'bread-omelette': '🍳',
  maggi: '🍜',
  'french-fries': '🍟',
  momos: '🥟',
  sandwiches: '🥪',
  'burgers-snacks': '🍔',
  'fruit-salad': '🍎',
  milkshakes: '🥤',
  'milk-special': '🥛',
  mojitos: '🍹',
}
