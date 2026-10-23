export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div className="foot-brand">
          <a className="foot-logo" href="#top">
            <img src="favicon.png" alt="" width="36" height="36" />
            <span>AskAtom Solutions LLC</span>
          </a>
          <p>Websites, apps, and automation for businesses in New Jersey.</p>
          <p className="foot-place">New Jersey, USA</p>
          <a className="foot-mail" href="mailto:support@askatomsolutions.com">support@askatomsolutions.com</a>
        </div>

        <div className="foot-cols">
          <nav aria-label="Explore">
            <p className="foot-label">Explore</p>
            <a href="#work">Services</a>
            <a href="#cases">Work</a>
            <a href="#company">Company</a>
          </nav>
          <nav aria-label="Company">
            <p className="foot-label">Company</p>
            <a href="#process">Process</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
          </nav>
          <nav aria-label="Contact">
            <p className="foot-label">Contact</p>
            <a href="#contact">Start a project</a>
            <a href="mailto:support@askatomsolutions.com">Email us</a>
            <span className="foot-note">US business hours · $80/hr</span>
          </nav>
        </div>
      </div>
      <div className="wrap foot-base">
        <span>© 2026 AskAtom Solutions LLC</span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  )
}
