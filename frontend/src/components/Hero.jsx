import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Leaf } from 'lucide-react'
import watermelonImg from '../assets/products/watermelon.webp'
import mangoMilkshakeImg from '../assets/mango milkshake.webp'
import blueberryMojitoImg from '../assets/blueberry mojito.webp'
import avocadoImg from '../assets/avocado.webp'
import frenchFriesImg from '../assets/french fries.webp'

const SLIDES = [
  {
    img: watermelonImg,
    alt: 'Watermelon Juice',
    eyebrow: 'Fresh · Delicious · Refreshing',
    title: 'Freshness in Every Sip.',
    subtitle: 'Fresh juices • Delicious snacks • Refreshing drinks',
  },
  {
    img: mangoMilkshakeImg,
    alt: 'Mango Milkshake',
    eyebrow: 'Thick · Creamy · Dreamy',
    title: 'Milkshakes Made to Crave.',
    subtitle: 'Real fruit pulp, chilled milk & a swirl of happiness.',
  },
  {
    img: blueberryMojitoImg,
    alt: 'Blueberry Mojito',
    eyebrow: 'Cool · Fizzy · Refreshing',
    title: 'Mocktails That Fizz & Pop.',
    subtitle: 'Fresh mint, berries & a splash of sparkling fun.',
  },
  {
    img: avocadoImg,
    alt: 'Avocado Juice',
    eyebrow: 'Healthy · Creamy · Natural',
    title: 'Green Goodness in a Glass.',
    subtitle: 'Velvety avocado juice loaded with natural nutrients.',
  },
  {
    img: frenchFriesImg,
    alt: 'French Fries',
    eyebrow: 'Crispy · Golden · Hot',
    title: 'Snacks That Steal the Show.',
    subtitle: 'Golden fries & bites, served crisp and hot.',
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return undefined
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length)
    }, 4800)
    return () => clearInterval(timer)
  }, [paused])

  const goTo = (i) => setIndex((i + SLIDES.length) % SLIDES.length)
  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)

  return (
    <section
      className="hero"
      aria-label="Welcome to Juice Land"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h1 className="sr-only">Welcome to Juice Land — fresh juices, snacks &amp; drinks</h1>
      <div className="hero__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {SLIDES.map((slide, i) => (
          <div
            className="hero__banner"
            key={slide.alt}
            aria-hidden={i !== index}
            inert={i !== index}
          >
            <div className="hero__inner">
              <div className="hero__content">
                <p className="hero__eyebrow">
                  <Leaf size={14} strokeWidth={2.6} aria-hidden="true" />
                  {slide.eyebrow}
                </p>
                <p className="hero__title">{slide.title}</p>
                <p className="hero__subtitle">{slide.subtitle}</p>
              </div>
              <div className="hero__art">
                <div className="hero__stage">
                  <img
                    className="hero__img"
                    src={slide.img}
                    width="280"
                    height="260"
                    alt={slide.alt}
                    fetchPriority={i === 0 ? 'high' : 'low'}
                    decoding="async"
                  />
                </div>
                <div className="hero__dots" role="tablist" aria-label="Choose banner">
                  {SLIDES.map((s, d) => (
                    <button
                      key={s.alt}
                      type="button"
                      role="tab"
                      aria-selected={d === index}
                      aria-label={s.alt}
                      className={'hero__dot' + (d === index ? ' is-active' : '')}
                      onClick={() => goTo(d)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="hero__nav hero__nav--prev"
        onClick={prev}
        aria-label="Previous banner"
      >
        <ChevronLeft size={20} strokeWidth={2.4} />
      </button>
      <button
        type="button"
        className="hero__nav hero__nav--next"
        onClick={next}
        aria-label="Next banner"
      >
        <ChevronRight size={20} strokeWidth={2.4} />
      </button>
    </section>
  )
}
