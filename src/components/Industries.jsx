import { industries } from '../data/company.js'

export default function Industries() {
  return (
    <section id="industries">
      <div className="wrap">
        <div className="sec-head">
          <h2>Industries we work in</h2>
          <p>We're generalists by design, but these are the fields we know best.</p>
        </div>
        <ul className="ind-grid">
          {industries.map((d) => (
            <li key={d.name}>
              <h3>{d.name}</h3>
              <p>{d.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
