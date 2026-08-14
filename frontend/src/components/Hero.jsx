import { Leaf, Sparkles } from 'lucide-react'
import { SITE } from '../data/siteConfig'

export default function Hero() {
  return (
    <section className="hero" aria-label="Welcome to Juice Land">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <Leaf size={14} strokeWidth={2.6} aria-hidden="true" />
            Fresh · Delicious · Refreshing
          </p>
          <h1 className="hero__title">
            Freshness <span className="hero__title-accent">in Every Sip.</span>
          </h1>
          <p className="hero__subtitle">
            Fresh juices • Delicious snacks • Refreshing drinks
          </p>
        </div>
        <div className="hero__art">
          <img
            className="hero__img"
            src={SITE.hero}
            width="280"
            height="260"
            alt="Fresh glass of orange juice with mint"
            decoding="async"
            loading="eager"
          />
          <span className="hero__spark hero__spark--1" aria-hidden="true">
            <Sparkles size={18} strokeWidth={2.4} />
          </span>
          <span className="hero__spark hero__spark--2" aria-hidden="true">
            <Sparkles size={12} strokeWidth={2.4} />
          </span>
        </div>
      </div>
    </section>
  )
}
