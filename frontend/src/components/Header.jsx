import { Search } from 'lucide-react'
import { SITE } from '../data/siteConfig'

export default function Header({ onSearchClick, scrolled }) {
  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a className="header__brand" href="#top" aria-label="Jump to top of Juice Land menu">
          <img
            className="header__logo"
            src={SITE.logo}
            width="144"
            height="108"
            alt="Juice Land logo"
            decoding="async"
          />
          <span className="header__tagline">{SITE.tagline}</span>
        </a>
        <button
          type="button"
          className="header__search-btn"
          onClick={onSearchClick}
          aria-label="Search the menu"
          aria-controls="menu-search"
        >
          <Search size={22} strokeWidth={2.4} aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
