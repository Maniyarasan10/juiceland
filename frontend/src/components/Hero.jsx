import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Leaf, Sparkles } from 'lucide-react'
import watermelonImg from '../assets/products/watermelon.webp'
import mangoMilkshakeImg from '../assets/mango milkshake.webp'
import blueberryMojitoImg from '../assets/blueberry mojito.webp'
import avocadoImg from '../assets/avocado.webp'
import frenchFriesImg from '../assets/french fries.webp'

const SLIDES = [
  { img: watermelonImg, alt: 'Watermelon Juice' },
  { img: mangoMilkshakeImg, alt: 'Mango Milkshake' },
  { img: blueberryMojitoImg, alt: 'Blueberry Mojito' },
  { img: avocadoImg, alt: 'Avocado Juice' },
  { img: frenchFriesImg, alt: 'French Fries' },
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return undefined
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [paused])

  const goTo = (i) => setIndex((i + SLIDES.length) % SLIDES.length)
  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)

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
        <div
          className="hero__art"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured products"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="hero__stage">
            <div
              className="hero__slides"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {SLIDES.map((slide, i) => (
                <div className="hero__slide" key={slide.alt} aria-hidden={i !== index}>
                  <img
                    className="hero__img"
                    src={slide.img}
                    width="280"
                    height="260"
                    alt={slide.alt}
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="hero__nav hero__nav--prev"
            onClick={prev}
            aria-label="Previous product"
          >
            <ChevronLeft size={18} strokeWidth={2.4} />
          </button>
          <button
            type="button"
            className="hero__nav hero__nav--next"
            onClick={next}
            aria-label="Next product"
          >
            <ChevronRight size={18} strokeWidth={2.4} />
          </button>
          <div className="hero__dots" role="tablist" aria-label="Choose product">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.alt}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={slide.alt}
                className={'hero__dot' + (i === index ? ' is-active' : '')}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
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
