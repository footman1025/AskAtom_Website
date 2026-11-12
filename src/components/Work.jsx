import { useEffect, useState } from 'react'
import categories from '../data/products.js'
import { asset } from '../asset.js'
import ProductModal from './ProductModal.jsx'

const HOME_TITLE = 'AskAtom Solutions LLC · Software development in New Jersey'
const PREVIEW_COUNT = 8

function readPath() {
  return window.location.pathname.replace(/\/+$/, '') || '/'
}

function categoryFromPath(path) {
  const match = path.match(/^\/projects\/([a-z0-9-]+)$/)
  if (!match) return null
  return categories.find((c) => c.id === match[1]) || null
}

function previewGroups(expanded) {
  if (expanded) return categories
  const groups = []
  let left = PREVIEW_COUNT
  for (const group of categories) {
    if (left <= 0) break
    const items = group.items.slice(0, left)
    left -= items.length
    groups.push({ ...group, items })
  }
  return groups
}

function AllProjects({ expanded, onExpand, cards }) {
  const groups = previewGroups(expanded)
  const shown = groups.reduce((n, group) => n + group.items.length, 0)
  const total = categories.reduce((n, group) => n + group.items.length, 0)
  const more = total - shown

  return (
    <>
      <p className="tab-summary">Every service, with the projects we take on in each one.</p>
      <div className="project-groups">
        {groups.map((group) => (
          <div className="project-group" key={group.id} id={`projects-${group.id}`}>
            <h3>{group.label}</h3>
            <p className="tab-summary">{group.summary}</p>
            {cards(group)}
          </div>
        ))}
      </div>
      {!expanded && more > 0 && (
        <button type="button" className="archive" onClick={onExpand}>
          <span>
            <span className="archive-label">View the full archive</span>
            <span className="archive-more">{more} more {more === 1 ? 'project' : 'projects'}</span>
          </span>
          <span className="archive-arrow" aria-hidden="true">↓</span>
        </button>
      )}
    </>
  )
}

export default function Work() {
  const [path, setPath] = useState(readPath)
  const [open, setOpen] = useState(null)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const onPop = () => setPath(readPath())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const showAll = path === '/projects'
  const category = categoryFromPath(path)
  const activeId = showAll ? 'all' : (category ? category.id : categories[0].id)

  useEffect(() => {
    const link = document.querySelector('link[rel="canonical"]')
    if (showAll) {
      document.title = 'All projects · AskAtom Solutions LLC'
      if (link) link.href = 'https://askatomsolutions.com/projects'
    } else if (category) {
      document.title = `${category.label} projects · AskAtom Solutions LLC`
      if (link) link.href = `https://askatomsolutions.com/projects/${category.id}`
    } else {
      document.title = HOME_TITLE
      if (link) link.href = 'https://askatomsolutions.com/'
    }
  }, [showAll, category])

  useEffect(() => {
    setExpanded(false)
  }, [path])

  useEffect(() => {
    if (path === '/') return
    document.getElementById('work')?.scrollIntoView()
  }, [path])

  function navigate(next) {
    if (readPath() === next) return
    window.history.pushState({}, '', next)
    setPath(next)
    setOpen(null)
  }

  function onTabClick(event, next) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    event.preventDefault()
    navigate(next)
  }

  const openCategory = open ? categories.find((c) => c.id === open.categoryId) : null

  function cards(group) {
    return (
      <div className="panel">
        {group.items.map((item, i) => (
          <button className="card" key={item.title} onClick={() => setOpen({ categoryId: group.id, index: i })}>
            <img src={asset(item.img)} alt={item.alt} loading="lazy" />
            <h3>{item.title}</h3>
          </button>
        ))}
      </div>
    )
  }

  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-head">
          <h2>What we build</h2>
          <p>Most of our work falls into one of these areas. Pick one to see the kinds of projects we take on. If yours isn't listed, ask anyway.</p>
        </div>

        <div className="tabs" role="tablist" aria-label="Services">
          <a
            className="tab"
            role="tab"
            href="/projects"
            aria-selected={activeId === 'all'}
            onClick={(e) => onTabClick(e, '/projects')}
          >All</a>
          {categories.map((c) => (
            <a
              key={c.id}
              className="tab"
              role="tab"
              href={`/projects/${c.id}`}
              aria-selected={c.id === activeId}
              onClick={(e) => onTabClick(e, `/projects/${c.id}`)}
            >{c.label}</a>
          ))}
        </div>

        {(showAll || (!category && path.startsWith('/projects/'))) ? (
          <AllProjects expanded={expanded} onExpand={() => setExpanded(true)} cards={cards} />
        ) : (
          <>
            <p className="tab-summary">{(category || categories[0]).summary}</p>
            {cards(category || categories[0])}
          </>
        )}
      </div>

      {openCategory && (
        <ProductModal
          category={openCategory}
          index={open.index}
          onNavigate={(index) => setOpen({ categoryId: openCategory.id, index })}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  )
}
