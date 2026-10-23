export default function Navbar() {
  return (
    <header>
      <div className="wrap nav">
        <a className="logo" href="#top" aria-label="AskAtom Solutions LLC home">
          <img className="mark" src="favicon.svg" alt="" width="28" height="28" />
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
