import { stats, clients } from '../data/company.js'
import Fill from './Fill.jsx'

const badges = [
  { label: 'Verified', img: 'badges/verified.svg' },
  { label: 'Preferred Freelancer', img: 'badges/preferred.svg' },
  { label: 'Shareholder', img: 'badges/shareholder.svg' },
]

export default function Hero() {
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
          <ul className="seals" aria-label="Freelancer.com credentials">
            {badges.map((b) => (
              <li key={b.label}>
                <img src={b.img} alt="" width="22" height="22" />
                {b.label}
              </li>
            ))}
            <li className="seals-src">on Freelancer.com</li>
          </ul>
        </div>
        <figure className="hero-img">
          <img src="images/site/hero-workstation.jpg" alt="Coding workstation with two monitors showing code" />
        </figure>
      </div>

      <div className="stats-band">
        <dl className="wrap stats">
          {stats.map((s) => (
            <div key={s.label}>
              <dt><Fill text={s.value} /></dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
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
