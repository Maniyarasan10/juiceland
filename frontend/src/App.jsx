import { useEffect, useMemo, useRef, useState } from 'react'
import { SearchX } from 'lucide-react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Hero from './components/Hero'
import CategoryNav from './components/CategoryNav'
import PopularItems from './components/PopularItems'
import MenuSection from './components/MenuSection'
import MenuCard from './components/MenuCard'
import ProductModal from './components/ProductModal'
import Footer from './components/Footer'
import { CATEGORIES, MENU_ITEMS, getCategoryLabel } from './data/menuData'

export default function App() {
  const [query, setQuery] = useState('')
  const [activeCat, setActiveCat] = useState('all')
  const [selected, setSelected] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  const searchRef = useRef(null)
  const menuRef = useRef(null)
  const isSearching = query.trim().length > 0

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      if (window.scrollY < 140) setActiveCat('all')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll('[data-category]'),
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCat(entry.target.dataset.category)
          }
        })
      },
      { rootMargin: '-28% 0px -62% 0px' },
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [isSearching])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return MENU_ITEMS.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        getCategoryLabel(item.category).toLowerCase().includes(q),
    )
  }, [query])

  const focusSearch = () => {
    searchRef.current?.focus()
    searchRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }

  const handleCategorySelect = (id) => {
    setActiveCat(id)
    if (id === 'all') {
      menuRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' })
      return
    }
    document
      .getElementById(`menu-${id}`)
      ?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  const openItem = (item) => setSelected(item)

  return (
    <div className="app" id="top">
      <Header onSearchClick={focusSearch} scrolled={scrolled} />
      <SearchBar
        value={query}
        onChange={setQuery}
        onClear={() => setQuery('')}
        inputRef={searchRef}
      />

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
                  <MenuCard key={item.id} item={item} index={i} onSelect={openItem} />
                ))}
              </div>
            ) : (
              <div className="searchresults__empty">
                <SearchX size={44} strokeWidth={1.6} aria-hidden="true" />
                <p className="searchresults__empty-title">No items found</p>
                <p className="searchresults__empty-sub">
                  Try searching for something else.
                </p>
              </div>
            )}
          </section>
        ) : (
          <>
            <Hero />
            <div className="menu" ref={menuRef}>
              <PopularItems onSelect={openItem} />
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
                    onSelect={openItem}
                  />
                )
              })}
            </div>
          </>
        )}
      </main>

      <Footer />
      {selected && <ProductModal item={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
