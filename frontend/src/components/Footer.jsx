import { SITE } from '../data/siteConfig'
import juiceLandLogo from '../assets/products/juice-land-logo.webp'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <img className="footer__logo" src={SITE.logo} width="144" height="108" alt="" decoding="async" />
        <span className="footer__brandblock">
          <img className="footer__title" src={juiceLandLogo} alt="" decoding="async" />
          <span className="footer__tagline">{SITE.tagline}</span>
        </span>
        <p className="footer__copy">© {SITE.copyrightYear} Juice Land</p>
        <div className="footer__credit">
          <p className="footer__credit-dev">Developed by <strong>Problem Solving Mind</strong></p>
          <a className="footer__credit-link" href="https://www.problemsolvingmind.com" target="_blank" rel="noopener noreferrer">
            www.problemsolvingmind.com
          </a>
          <a className="footer__credit-link" href="mailto:problemsolvingminds@gmail.com">
            problemsolvingminds@gmail.com
          </a>
          <a className="footer__credit-link" href="tel:+919360207861">
            +91 9360207861
          </a>
        </div>
      </div>
    </footer>
  )
}
