function Navbar() {
  const navLinks = [
    { label: "Home", href: "#main-section" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#project" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="container-fluid position-fixed top-0 z-1 blur-navbar" id="top-section">
      <div className="container p-0">
        <nav className="navbar navbar-expand-lg" id="navBar">
          <div className="container-fluid px-1 p-lg-0 fs-5">
            {/* Brand */}
            <a
              href="#main-section"
              className="navbar-brand text-2c3e50 fw-medium fs-3"
              aria-label="Yash Nagla Portfolio Home"
            >
              Yash Nagla
            </a>

            {/* Mobile toggle button */}
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navigation links */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav">
                {navLinks.map((link, index) => (
                  <li className="nav-item" key={index}>
                    <a
                      className="nav-link text-2c3e50 fw-medium"
                      href={link.href}
                      aria-label={`Navigate to ${link.label}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;