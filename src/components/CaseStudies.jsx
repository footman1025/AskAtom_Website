import { caseStudies } from '../data/company.js'
import Fill from './Fill.jsx'

export default function CaseStudies() {
  return (
    <section id="cases">
      <div className="wrap">
        <div className="sec-head">
          <h2>Selected work</h2>
          <p>A few recent projects, what the problem was, and what changed after.</p>
        </div>
        <div className="cases">
          {caseStudies.map((c, i) => (
            <article className="case" key={i}>
              <img src={c.img} alt={c.alt} loading="lazy" />
              <div className="case-body">
                <p className="case-meta">
                  <Fill text={c.client} /> · {c.industry} · <Fill text={c.year} />
                </p>
                <h3>{c.title}</h3>
                <p className="case-text">{c.text}</p>
                <dl className="case-results">
                  {c.results.map((r) => (
                    <div key={r.label}>
                      <dt><Fill text={r.value} /></dt>
                      <dd>{r.label}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
