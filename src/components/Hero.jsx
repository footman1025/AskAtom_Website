import { useEffect, useRef, useState } from 'react'
import { stats, clients } from '../data/company.js'
import Fill from './Fill.jsx'

const badges = [
  { label: 'Verified', img: 'badges/verified.svg' },
  { label: 'Preferred Freelancer', img: 'badges/preferred.svg' },
  { label: 'Shareholder', img: 'badges/shareholder.svg' },
]

function readStat(raw) {
  const text = String(raw).replace(/\[([^\]]+)\]/g, '$1')
  const match = text.match(/^(-?\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { text, num: null }
  const num = Number(match[1])
  return {
    text,
    num,
    suffix: match[2],
    decimals: (match[1].split('.')[1] || '').length,
    animate: num <= 100,
  }
}

function startDisplay(parsed) {
  if (parsed.num == null || !parsed.animate) return parsed.text
  const body = parsed.decimals ? (0).toFixed(parsed.decimals) : '0'
  return body + parsed.suffix
}

function useStatNumber(raw, play) {
  const parsed = readStat(raw)
  const [display, setDisplay] = useState(() => startDisplay(parsed))

  useEffect(() => {
    if (!play) return
    if (parsed.num == null || !parsed.animate) {
      setDisplay(parsed.text)
      return
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(parsed.text)
      return
    }
    let frame
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - start) / 1200)
      const eased = 1 - (1 - t) ** 3
      const n = parsed.num * eased
      const body = parsed.decimals ? n.toFixed(parsed.decimals) : String(Math.round(n))
      setDisplay(body + parsed.suffix)
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [play, raw])

  return display
}

function Stat({ value, label, play, index }) {
  const shown = useStatNumber(value, play)
  return (
    <div style={{ animationDelay: `${0.08 + index * 0.08}s` }}>
      <dt>{shown}</dt>
      <dd>{label}</dd>
    </div>
  )
}

export default function Hero() {
  const proof = useRef(null)
  const [play, setPlay] = useState(false)

  useEffect(() => {
    const node = proof.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setPlay(true)
      observer.disconnect()
    }, { threshold: 0.35 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <p className="kicker">Software development · New Jersey, USA</p>
          <h1>Websites, apps and automation for businesses that need them to just work.</h1>
          <p className="sub">
            AskAtom Solutions LLC designs, builds and looks after the software that companies run on,
            from online stores and client portals to AI assistants and trading systems. Tell us
            what's slowing you down. We'll tell you plainly what it would take to fix, and what it costs.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#contact">Tell us about your project</a>
            <a className="textlink" href="#cases">See our work →</a>
          </div>
        </div>
        <figure className="hero-img">
          <img src="images/site/hero-mascot.png" alt="AskAtom mascot with a laptop, surrounded by app, cloud, and automation icons" />
        </figure>
      </div>

      <div className="wrap proof" ref={proof}>
        <div className="proof-card">
          <ul className="proof-seals" aria-label="Freelancer.com credentials">
            {badges.map((b, i) => (
              <li key={b.label} style={{ animationDelay: `${i * 0.08}s` }}>
                <img src={b.img} alt="" width="28" height="28" />
                {b.label}
              </li>
            ))}
            <li className="seals-src" style={{ animationDelay: '0.24s' }}>on Freelancer.com</li>
          </ul>
          <dl className="stats">
            {stats.map((s, i) => (
              <Stat key={s.label} value={s.value} label={s.label} play={play} index={i} />
            ))}
          </dl>
        </div>
      </div>

      <div className="wrap clients">
        <span className="clients-label">Trusted by</span>
        <ul>
          {clients.map((c, i) => <li key={i}><Fill text={c} /></li>)}
        </ul>
      </div>
    </div>
  )
}
