import { SITE } from '../data/siteConfig'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <img
          className="footer__logo"
          src={SITE.logo}
          width="144"
          height="108"
          alt=""
          decoding="async"
        />
        <p className="footer__name">{SITE.name}</p>
        <p className="footer__tagline">{SITE.tagline}</p>
        <p className="footer__copy">© {SITE.copyrightYear} Juice Land</p>
      </div>
    </footer>
  )
}
