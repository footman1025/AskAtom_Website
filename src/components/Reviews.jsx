// Client reviews, quoted word for word. Don't edit the text.
// Reviewer names: Justin, Shiv and Richard as given; the other three are
// sample names, so swap in the real reviewers' names.
const reviews = [
  {
    name: 'Justin',
    tag: 'WordPress & Fluent development',
    text: 'AskAtom Solutions LLC has done an outstanding job developing our WordPress and Fluent software systems. The team is knowledgeable, reliable, and excellent at building forms, automations, integrations, and custom workflows. They understand what we need and consistently deliver clean, professional solutions. Highly recommend them for WordPress and Fluent development!',
  },
  {
    name: 'Shiv',
    tag: 'Custom programming',
    text: 'AskAtom Solutions LLC is one of the most talented teams I’ve had the pleasure of working with. They have an incredible ability to understand complex problems, find the right solutions, and execute them flawlessly. Their coding skills, creativity, and attention to detail are second to none. If you want a team that can truly make things work, AskAtom Solutions LLC is who you want on your side.',
  },
  {
    name: 'Richard',
    tag: 'Software development',
    text: 'AskAtom Solutions LLC is exceptional and an absolute pleasure to work with. Their technical expertise, problem-solving skills, and attention to detail are outstanding. They consistently take complex challenges and turn them into smart, efficient solutions. Responsive, creative, reliable, and genuinely committed to getting things right.',
  },
  {
    name: 'Michael',
    tag: 'Business application form',
    text: 'AskAtom Solutions LLC absolutely knocked it out of the park. They built our business application form exactly the way we envisioned it and made the entire process incredibly easy. Everything was polished, professional, and worked flawlessly from the start. Highly recommended — we’ll definitely be hiring them again.',
  },
  {
    name: 'Daniel',
    tag: 'Form automation',
    text: 'AskAtom Solutions LLC did an unbelievable job building our automated forms. Everything was set up flawlessly, works exactly as intended, and was delivered with impressive attention to detail. They turned a complex process into something simple and seamless. Extremely professional, reliable, and skilled.',
  },
  {
    name: 'Priya',
    tag: 'Full-stack project',
    text: 'Excellent team to work with. AskAtom Solutions LLC completed the project on time and delivered a high-quality result that met all my expectations. Communication was clear, professional, and responsive throughout the project. I really appreciated their attention to detail and reliability. Highly recommend them!',
  },
]

export default function Reviews() {
  return (
    <section id="reviews">
      <div className="wrap">
        <div className="sec-head">
          <h2>What clients have said</h2>
          <p>Reviews from verified clients on recent projects.</p>
        </div>
        <div className="rev-grid">
          {reviews.map((r) => (
            <figure className="rev" key={r.tag}>
              <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>{r.text}</blockquote>
              <figcaption>
                <b>{r.name}</b>
                <span>{r.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
