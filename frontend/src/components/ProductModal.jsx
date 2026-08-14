import { useEffect, useRef } from 'react'
import { X, Info } from 'lucide-react'
import { getCategoryLabel, formatPrice } from '../data/menuData'
import VegBadge from './VegBadge'

export default function ProductModal({ item, onClose }) {
  const closeRef = useRef(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    const previousFocus = document.activeElement
    closeRef.current?.focus()
    document.body.classList.add('no-scroll')

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        const nodes = dialogRef.current?.querySelectorAll('button')
        if (!nodes || nodes.length === 0) return
        const first = nodes[0]
        const last = nodes[nodes.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('no-scroll')
      document.removeEventListener('keydown', onKey)
      previousFocus?.focus?.()
    }
  }, [onClose])

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
    >
      <button
        type="button"
        className="modal__backdrop"
        onClick={onClose}
        aria-label="Close item details"
        tabIndex={-1}
      />
      <div className="modal__sheet" ref={dialogRef}>
        <div className="modal__drag" aria-hidden="true" />
        <div className="modal__imgwrap">
          <img
            className="modal__img"
            src={item.image}
            style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
            alt={item.name}
            width="640"
            height="480"
            decoding="async"
          />
          <span className="modal__chip">{getCategoryLabel(item.category)}</span>
          <button
            type="button"
            className="modal__close"
            onClick={onClose}
            ref={closeRef}
            aria-label="Close"
          >
            <X size={20} strokeWidth={2.6} aria-hidden="true" />
          </button>
        </div>
        <div className="modal__body">
          <div className="modal__row">
            <VegBadge type={item.type} size="small" />
            <span className="modal__type-label">
              {item.type === 'veg' ? 'Vegetarian' : 'Non-vegetarian'}
            </span>
          </div>
          <h2 className="modal__title" id="modal-title">
            {item.name}
          </h2>
          <p className="modal__price">{formatPrice(item.price)}</p>
          <p className="modal__desc" id="modal-desc">
            {item.description}
          </p>
          {item.addon && (
            <div className="modal__addon">
              <Info size={16} strokeWidth={2.4} aria-hidden="true" />
              {item.addon.label} <b>+₹{item.addon.price}</b>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
