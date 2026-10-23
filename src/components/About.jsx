import { about } from '../data/company.js'
import Fill from './Fill.jsx'

export default function About() {
  return (
    <section id="company">
      <div className="wrap about">
        <figure className="about-img">
          <img src="images/site/about-office.jpg" alt="Developer working on a laptop in a bright office" loading="lazy" />
        </figure>
        <div className="about-text">
          <h2>About the company</h2>
          {about.story.map((p, i) => <p key={i}><Fill text={p} /></p>)}
          <dl className="about-facts">
            <div><dt>Founded</dt><dd><Fill text={about.founded} /></dd></div>
            <div><dt>Team</dt><dd><Fill text={about.team} /></dd></div>
            <div><dt>Offices</dt><dd><Fill text={about.offices} /></dd></div>
          </dl>
          <ul className="values">
            {about.values.map((v) => (
              <li key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
