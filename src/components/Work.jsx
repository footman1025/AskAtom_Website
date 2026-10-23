import { useState } from 'react'
import categories from '../data/products.js'
import ProductModal from './ProductModal.jsx'

export default function Work() {
  const [active, setActive] = useState(categories[0].id)
  const [open, setOpen] = useState(null)
  const category = categories.find((c) => c.id === active)

  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-head">
          <h2>What we build</h2>
          <p>
            Most of our work falls into one of these areas. Pick one to see the kinds of projects
            we take on. If yours isn't listed, ask anyway.
          </p>
        </div>

        <div className="tabs" role="tablist" aria-label="Areas of work">
          {categories.map((c) => (
            <button
              key={c.id}
              className="tab"
              role="tab"
              aria-selected={c.id === active}
              onClick={() => { setActive(c.id); setOpen(null) }}
            >
              {c.label}
            </button>
          ))}
        </div>

        <p className="tab-summary">{category.summary}</p>

        <div className="panel" role="tabpanel" key={category.id}>
          {category.items.map((item, i) => (
            <button key={item.img} className="card" onClick={() => setOpen(i)} aria-haspopup="dialog">
              <img src={item.img} alt={item.alt} loading="lazy" />
              <span className="card-title">{item.title}</span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <ProductModal category={category} index={open} onNavigate={setOpen} onClose={() => setOpen(null)} />
      )}
    </section>
  )
}
