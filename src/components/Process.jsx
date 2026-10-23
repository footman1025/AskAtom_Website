const steps = [
  {
    title: "You tell us what's going on",
    text: "Send a few lines through the form below, or just email us. You don't need a spec. We'll ask whatever we need to know.",
  },
  {
    title: 'We send a plan and a price',
    text: "What we'd build, what we'd leave out, and a quote split into milestones. If something is overkill for your budget, we'll say so.",
  },
  {
    title: 'We build, you check in',
    text: 'Each milestone goes up on a staging link for you to try before we move on, so you always know what is done and what is next.',
  },
  {
    title: 'You get everything',
    text: 'Source code, documentation and every login. No lock-in. We stay around after launch for fixes and changes, during US business hours.',
  },
]

export default function Process() {
  return (
    <section id="process">
      <div className="wrap process">
        <div className="sec-head">
          <h2>How a project works</h2>
          <p>
            Nothing unusual here, just the steps we've found keep projects on track and clients
            out of the dark.
          </p>
          <p className="record">
            Our record so far: <b>5.0</b> average rating, <b>100%</b> on time, <b>100%</b> on budget.
          </p>
        </div>
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
