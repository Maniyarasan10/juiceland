import { Search } from 'lucide-react'
import { SITE } from '../data/siteConfig'
import juiceLandLogo from '../assets/products/juice-land-logo.webp'
import logoImg from '../assets/logo.png'

export default function Header({ onSearchClick, scrolled }) {
  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a className="header__center" href="#top" aria-label="Jump to top of Juice Land menu">
          <img
            className="header__icon"
            src={logoImg}
            alt=""
            decoding="async"
          />
          <span className="header__brandblock">
            <img
              className="header__title"
              src={juiceLandLogo}
              alt="Juice Land"
              decoding="async"
              loading="eager"
            />
            <span className="header__tagline">{SITE.tagline}</span>
          </span>
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
