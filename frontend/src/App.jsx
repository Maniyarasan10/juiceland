import { useEffect, useMemo, useRef, useState } from 'react'
import { SearchX, SlidersHorizontal } from 'lucide-react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Hero from './components/Hero'
import CategoryNav from './components/CategoryNav'
import PopularItems from './components/PopularItems'
import MenuSection from './components/MenuSection'
import MenuCard from './components/MenuCard'
import FilterBar from './components/FilterBar'
import Footer from './components/Footer'
import { CATEGORIES, MENU_ITEMS } from './data/menuData'
import {
  DEFAULT_FILTERS,
  getSuggestions,
  isFiltering,
  matchesFilters,
  searchItems,
} from './utils/search'

export default function App() {
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState(DEFAULT_FILTERS)
  const [activeCat, setActiveCat] = useState('all')
  const [scrolled, setScrolled] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)

  const searchRef = useRef(null)
  const menuRef = useRef(null)
  const isSearching = query.trim().length > 0

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const cs = getComputedStyle(document.documentElement)
      const stickyH =
        (parseFloat(cs.getPropertyValue('--header-h')) || 0) +
        (parseFloat(cs.getPropertyValue('--search-h')) || 0) +
        (parseFloat(cs.getPropertyValue('--nav-h')) || 0) ||
        212
      const y = window.scrollY + stickyH + 4
      let current = 'all'
      for (const el of document.querySelectorAll('[data-category]')) {
        if (el.getBoundingClientRect().top + window.scrollY <= y) {
          current = el.dataset.category
        }
      }
      setActiveCat((prev) => (prev === current ? prev : current))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    const pill = document.querySelector(`.catnav__pill[data-cat="${activeCat}"]`)
    const scroller = document.querySelector('.catnav__scroller')
    if (pill && scroller) {
      const pr = pill.getBoundingClientRect()
      const sr = scroller.getBoundingClientRect()
      const target = scroller.scrollLeft + (pr.left - sr.left) - sr.width / 2 + pr.width / 2
      scroller.scrollTo({ left: Math.max(0, target), behavior: 'auto' })
    }
  }, [activeCat])

  const filteredItems = useMemo(() => {
    if (!filterOpen) return []
    return MENU_ITEMS.filter((item) => matchesFilters(item, filters))
  }, [filterOpen, filters])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return searchItems(q).filter((item) => matchesFilters(item, filters))
  }, [query, filters])

  const suggestions = useMemo(() => {
    const q = query.trim()
    if (!q) return []
    return getSuggestions(q, 6)
  }, [query])

  const handleQueryChange = (q) => {
    setQuery(q)
  }

  const handleCategorySelect = (id) => {
    setActiveCat(id)
    const el = id === 'all' ? menuRef.current : document.getElementById(`menu-${id}`)
    if (!el) return
    const marginTop = parseFloat(getComputedStyle(el).scrollMarginTop) || 0
    const target = Math.max(0, el.getBoundingClientRect().top + window.scrollY - marginTop)
    window.scrollTo({ top: target, behavior: 'smooth' })
    window.setTimeout(() => {
      if (Math.abs(window.scrollY - target) > 8) {
        window.scrollTo(0, target)
      }
    }, 900)
  }

  return (
    <div className="app" id="top">
      <Header scrolled={scrolled} />
      <div className="searchbar" id="menu-search">
        <SearchBar
          value={query}
          onChange={handleQueryChange}
          onClear={() => handleQueryChange('')}
          suggestions={suggestions}
          inputRef={searchRef}
        />
        <button
          type="button"
          className={`filter-toggle ${filterOpen ? 'filter-toggle--active' : ''}`}
          onClick={() => setFilterOpen((v) => !v)}
          aria-label="Toggle filters"
          aria-pressed={filterOpen}
        >
          <SlidersHorizontal size={18} strokeWidth={2.4} aria-hidden="true" />
        </button>
      </div>
      {filterOpen && (
        <FilterBar filters={filters} onChange={setFilters} count={isSearching ? results.length : null} />
      )}

      <main className="main">
        {isSearching ? (
          <section className="searchresults" aria-live="polite">
            <div className="searchresults__head">
              <h1 className="searchresults__title">
                Results for <span>&ldquo;{query.trim()}&rdquo;</span>
              </h1>
              <p className="searchresults__count" aria-live="polite">
                {results.length} {results.length === 1 ? 'item' : 'items'} found
              </p>
            </div>
            {results.length > 0 ? (
              <div className="searchresults__grid">
                {results.map((item, i) => (
                  <MenuCard key={item.id} item={item} index={i} />
                ))}
              </div>
            ) : (
              <div className="searchresults__empty">
                <SearchX size={44} strokeWidth={1.6} aria-hidden="true" />
                <p className="searchresults__empty-title">No items found</p>
                <p className="searchresults__empty-sub">
                  {isFiltering(filters)
                    ? 'Try removing some filters or use different keywords.'
                    : 'Try searching for something else.'}
                </p>
                {isFiltering(filters) && (
                  <button
                    type="button"
                    className="searchresults__reset"
                    onClick={() => setFilters(DEFAULT_FILTERS)}
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}
          </section>
        ) : filterOpen ? (
          <section className="filterresults" aria-live="polite">
            <div className="filterresults__head">
              <p className="filterresults__count">
                {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
              </p>
            </div>
            {filteredItems.length > 0 ? (
              <div className="searchresults__grid">
                {filteredItems.map((item, i) => (
                  <MenuCard key={item.id} item={item} index={i} />
                ))}
              </div>
            ) : (
              <div className="searchresults__empty">
                <SearchX size={44} strokeWidth={1.6} aria-hidden="true" />
                <p className="searchresults__empty-title">No items match filters</p>
                <p className="searchresults__empty-sub">Try adjusting your filters.</p>
                <button
                  type="button"
                  className="searchresults__reset"
                  onClick={() => setFilters(DEFAULT_FILTERS)}
                >
                  Clear filters
                </button>
              </div>
            )}
          </section>
        ) : (
          <>
            <Hero />
            <div className="menu" ref={menuRef}>
              <PopularItems />
              <CategoryNav active={activeCat} onSelect={handleCategorySelect} />
              {CATEGORIES.slice(1).map((cat) => {
                const items = MENU_ITEMS.filter(
                  (item) => item.category === cat.id,
                )
                if (items.length === 0) return null
                return (
                  <MenuSection
                    key={cat.id}
                    categoryId={cat.id}
                    items={items}
                  />
                )
              })}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}
