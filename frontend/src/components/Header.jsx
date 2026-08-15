import { SITE } from '../data/siteConfig'
import juiceLandLogo from '../assets/products/juice-land-logo.webp'
import logoImg from '../assets/logo.png'

export default function Header({ scrolled }) {
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
      </div>
    </header>
  )
}
