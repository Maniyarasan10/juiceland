import { useEffect, useRef, useState } from 'react'
import { Search, X, SearchCheck } from 'lucide-react'
import VegBadge from './VegBadge'
import { getCategoryLabel, formatPrice } from '../data/menuData'

export default function SearchBar({ value, onChange, onClear, onPick, suggestions = [], inputRef }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const boxRef = useRef(null)

  const showSuggestions = open && value.trim().length > 0 && suggestions.length > 0

  useEffect(() => {
    setActive(0)
  }, [value])

  useEffect(() => {
    const onDocClick = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  const pick = (item) => {
    onPick?.(item)
    setOpen(false)
  }

  const handleKeyDown = (e) => {
    if (!showSuggestions) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => (i + 1) % suggestions.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => (i - 1 + suggestions.length) % suggestions.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      pick(suggestions[active])
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <div className="searchbar" id="menu-search">
      <div className="searchbar__inner" ref={boxRef}>
        <label className="searchbar__label" htmlFor="menu-search-input">
          <span className="sr-only">Search the Juice Land menu</span>
          <Search size={18} strokeWidth={2.4} className="searchbar__icon" aria-hidden="true" />
        </label>
        <input
          id="menu-search-input"
          ref={inputRef}
          className="searchbar__input"
          type="search"
          placeholder="Search juices, burgers, momos…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck="false"
          aria-autocomplete="list"
          aria-controls="search-suggestions"
          aria-expanded={showSuggestions}
        />
        {value && (
          <button
            type="button"
            className="searchbar__clear"
            onClick={onClear}
            aria-label="Clear search"
          >
            <X size={16} strokeWidth={2.6} aria-hidden="true" />
          </button>
        )}

        {showSuggestions && (
          <ul
            id="search-suggestions"
            className="searchsuggest"
            role="listbox"
            aria-label="Search suggestions"
          >
            <li className="searchsuggest__hint">
              <SearchCheck size={14} strokeWidth={2.2} aria-hidden="true" />
              Suggestions
            </li>
            {suggestions.map((item, i) => (
              <li key={item.id} role="option" aria-selected={i === active}>
                <button
                  type="button"
                  className={`searchsuggest__item ${i === active ? 'searchsuggest__item--active' : ''}`}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    pick(item)
                  }}
                  onMouseEnter={() => setActive(i)}
                >
                  <VegBadge type={item.type} size="tiny" />
                  <span className="searchsuggest__name">{item.name}</span>
                  <span className="searchsuggest__meta">
                    {getCategoryLabel(item.category)}
                  </span>
                  <span className="searchsuggest__price">{formatPrice(item.price)}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
