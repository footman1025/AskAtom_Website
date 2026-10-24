import { useState } from 'react'

const CONTACT_EMAIL = 'support@askatomsolutions.com'

const SERVICES = [
  'Website or web app', 'Mobile app', 'AI', 'Automation', 'Trading tools',
  'Excel or data', 'Video editing', 'Online store', 'SaaS product', 'Something else',
]
const BUDGETS = ['Under $500', '$500 – $2,000', '$2,000 – $10,000', '$10,000+', 'Not sure yet']

const EMPTY = { name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  const set = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
    if (errors[field]) setErrors({ ...errors, [field]: null })
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please add your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "That email address doesn't look right."
    if (form.phone && !/^[+()\-.\s\d]{7,20}$/.test(form.phone)) errs.phone = "That phone number doesn't look right."
    if (form.message.trim().length < 20) errs.message = 'Could you say a little more? A sentence or two is plenty.'
    return errs
  }

  const summary = () =>
    [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      form.company && `Company: ${form.company}`,
      form.service && `Type of work: ${form.service}`,
      form.budget && `Rough budget: ${form.budget}`,
      '',
      'About the project:',
      form.message,
    ].filter(Boolean).join('\n')

  const onSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) { setSent(true); setCopied(false) }
  }

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summary())
      setCopied(true)
    } catch {
      // clipboard may be unavailable; leave the text selectable instead
      const node = document.getElementById('contact-summary')
      if (node) {
        const range = document.createRange()
        range.selectNodeContents(node)
        const sel = window.getSelection()
        sel.removeAllRanges()
        sel.addRange(range)
      }
    }
  }

  const mailtoHref = () =>
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Project inquiry from ${form.name}`)}&body=${encodeURIComponent(summary())}`

  return (
    <section id="contact">
      <div className="wrap contact">
        <div className="contact-info">
          <h2>Tell us about your project</h2>
          <p>
            A few lines is enough to start. We'll read it, ask questions if we need to, and get back
            to you within one business day with our take and a rough price.
          </p>
          <p>
            Prefer email? Write to us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
          <ul className="contact-facts">
            <li>New Jersey, USA. We work US business hours.</li>
            <li>$80/hr, with fixed quotes per milestone.</li>
            <li>Support after launch for fixes and changes.</li>
          </ul>
        </div>

        <div className="form-card">
          {!sent ? (
            <form onSubmit={onSubmit} noValidate>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="cf-name">Name</label>
                  <input id="cf-name" type="text" value={form.name} onChange={set('name')} autoComplete="name" />
                  {errors.name && <span className="err">{errors.name}</span>}
                </div>
                <div className="field">
                  <label htmlFor="cf-email">Email</label>
                  <input id="cf-email" type="email" value={form.email} onChange={set('email')} autoComplete="email" />
                  {errors.email && <span className="err">{errors.email}</span>}
                </div>
                <div className="field">
                  <label htmlFor="cf-phone">Phone <span className="opt">(optional)</span></label>
                  <input id="cf-phone" type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" />
                  {errors.phone && <span className="err">{errors.phone}</span>}
                </div>
                <div className="field">
                  <label htmlFor="cf-company">Company <span className="opt">(optional)</span></label>
                  <input id="cf-company" type="text" value={form.company} onChange={set('company')} autoComplete="organization" />
                </div>
                <div className="field">
                  <label htmlFor="cf-service">Type of work</label>
                  <select id="cf-service" value={form.service} onChange={set('service')}>
                    <option value="">Choose one</option>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="cf-budget">Rough budget</label>
                  <select id="cf-budget" value={form.budget} onChange={set('budget')}>
                    <option value="">Choose one</option>
                    {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div className="field field-full">
                  <label htmlFor="cf-message">What do you need?</label>
                  <textarea id="cf-message" rows="6" value={form.message} onChange={set('message')}
                    placeholder="e.g. Our booking form on WordPress keeps breaking and we'd like something more reliable. About 40 bookings a week." />
                  {errors.message && <span className="err">{errors.message}</span>}
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Continue</button>
                <span className="form-note">You'll see your message before anything is sent.</span>
              </div>
            </form>
          ) : (
            <div className="form-done">
              <h3>Almost there</h3>
              <p>
                Your message is ready. Open it in your email app to send it, or copy it and send it
                to <b>{CONTACT_EMAIL}</b> yourself.
              </p>
              <pre id="contact-summary">{summary()}</pre>
              <div className="form-actions">
                <a className="btn btn-primary" href={mailtoHref()}>Open in email app</a>
                <button type="button" className="btn btn-ghost" onClick={copySummary}>{copied ? 'Copied' : 'Copy text'}</button>
                <button type="button" className="btn btn-ghost" onClick={() => { setSent(false) }}>Go back and edit</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
