function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/yashnagla",
      label: "GitHub",
      icon: "fa-brands fa-github",
    },
    {
      href: "https://www.linkedin.com/in/yash-sikhwal-nagla/",
      label: "LinkedIn",
      icon: "fa-brands fa-linkedin-in",
    },
    {
      href: "https://www.instagram.com/yash.nagla",
      label: "Instagram",
      icon: "fa-brands fa-instagram",
    },
  ];

  return (
    <footer className="bg-2c3e50 text-white">
      {/* Main Footer Section */}
      <div className="container-fluid py-5">
        <div className="container p-0">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start gap-4">
            {/* Left Section */}
            <div>
              <h2 className="fw-semibold m-0">Yash Nagla</h2>
              <h3 className="fs-5 text-light m-0">Associate Software Developer</h3>
            </div>

            {/* Contact / Social Section */}
            <div>
              <h3 className="fw-semibold mb-3">Get in Touch</h3>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <i
                      className={`${link.icon} fs-3 p-2 rounded-circle bg-1e3e50 hover-opacity`}
                    ></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="py-3 border-top border-secondary text-center fs-6">
        <p className="m-0">
          © {new Date().getFullYear()} <strong>Yash Nagla</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;