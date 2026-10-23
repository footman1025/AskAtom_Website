import { useEffect, useRef } from 'react'

export default function ProductModal({ category, index, onNavigate, onClose }) {
  const item = category.items[index]
  const count = category.items.length
  const closeRef = useRef(null)
  const prev = () => onNavigate((index - 1 + count) % count)
  const next = () => onNavigate((index + 1) % count)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  })

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={item.title} onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} className="m-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="m-img">
          <img src={item.img} alt={item.alt} />
        </div>
        <div className="m-body">
          <span className="m-tag">{category.label}</span>
          <h3>{item.title}</h3>
          <p className="m-desc">{item.desc}</p>
          <a className="textlink" href="#contact" onClick={onClose}>Ask us about this →</a>
          <div className="m-foot">
            <span className="m-count">{index + 1} of {count}</span>
            <div className="m-nav">
              <button className="m-arrow" onClick={prev} aria-label="Previous">←</button>
              <button className="m-arrow" onClick={next} aria-label="Next">→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
