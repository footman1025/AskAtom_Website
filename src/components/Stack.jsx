import { stack } from '../data/company.js'

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <div className="sec-head">
          <h2>Tools we use</h2>
          <p>We pick the tool that fits your project and team, not the one that's in fashion.</p>
        </div>
        <dl className="stack">
          {stack.map((s) => (
            <div key={s.group}>
              <dt>{s.group}</dt>
              <dd>{s.items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
