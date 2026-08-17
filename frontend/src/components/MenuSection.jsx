import { getCategoryLabel, CATEGORIES } from '../data/menuData'
import MenuCard from './MenuCard'

const CATEGORY_IMG = Object.fromEntries(
  CATEGORIES.filter((c) => c.id !== 'all').map((c) => [c.id, c.img])
)

export default function MenuSection({ categoryId, items, sectionRef }) {
  const label = getCategoryLabel(categoryId)
  const catImg = CATEGORY_IMG[categoryId]
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
            {catImg ? (
              <img className="menusection__badge-img" src={catImg} alt="" decoding="async" />
            ) : (
              '·'
            )}
          </span>
          {label}
        </h2>
        <span className="menusection__count" aria-label={`${items.length} items`}>
          {items.length} {items.length === 1 ? 'item' : 'items'}
        </span>
      </div>
      <div className="menusection__grid">
        {items.map((item, i) => (
          <MenuCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
