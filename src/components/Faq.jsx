import { faqs } from '../data/company.js'

export default function Faq() {
  return (
    <section id="faq">
      <div className="wrap faq">
        <div className="sec-head">
          <h2>Common questions</h2>
          <p>
            Something else on your mind? Ask in the form below and we'll answer within one business day.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
