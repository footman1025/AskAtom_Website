export default function Navbar() {
  return (
    <header>
      <div className="wrap nav">
        <a className="logo" href="#top" aria-label="AskAtom Solutions LLC home">
          <svg className="atom" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <ellipse cx="20" cy="20" rx="17" ry="7.5" stroke="currentColor" strokeWidth="2" />
            <ellipse cx="20" cy="20" rx="17" ry="7.5" stroke="currentColor" strokeWidth="2" transform="rotate(60 20 20)" />
            <ellipse cx="20" cy="20" rx="17" ry="7.5" stroke="currentColor" strokeWidth="2" transform="rotate(120 20 20)" />
            <circle cx="20" cy="20" r="3.5" fill="var(--accent)" />
          </svg>
          AskAtom Solutions LLC
        </a>
        <nav className="navlinks" aria-label="Main">
          <a href="#work">Services</a>
          <a href="#cases">Work</a>
          <a href="#company">Company</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="btn btn-primary cta" href="#contact">Start a project</a>
      </div>
    </header>
  )
}
