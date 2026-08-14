import { Search, X } from 'lucide-react'

export default function SearchBar({ value, onChange, onClear, inputRef }) {
  return (
    <div className="searchbar" id="menu-search">
      <div className="searchbar__inner">
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
          autoComplete="off"
          spellCheck="false"
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
      </div>
    </div>
  )
}
