import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

function Navbar() {
  const navbarRef = useRef(null);
  const [active, setActive] = useState("#main-section");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Navbar fade down on load
      gsap.from(".nav-animate", {
        y: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      ScrollTrigger.create({
        start: "top -80",
        onEnter: () =>
          gsap.to(".blur-navbar", {
            backgroundColor: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(10px)",
            duration: 0.3,
          }),
        onLeaveBack: () =>
          gsap.to(".blur-navbar", {
            backgroundColor: "transparent",
            backdropFilter: "blur(0px)",
            duration: 0.3,
          }),
      });
    }, navbarRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document
          .querySelector(this.getAttribute("href"))
          ?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  const navLinks = [
    { label: "Home", href: "#main-section" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#project" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

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
    <header
      ref={navbarRef}
      className="container-fluid position-fixed top-0 z-1 blur-navbar"
      id="top-section"
    >
      <div className="container p-0">
        <nav className="navbar navbar-expand-lg w-100" id="navBar">
          <div className="d-flex justify-content-between w-100">
            <div className="container-fluid d-flex justify-content-between align-items-center px-0 p-lg-0 fs-5">
              {/* Brand */}
              <a
                href="#main-section"
                className="navbar-brand text-2c3e50 fw-medium fs-3 nav-animate"
                aria-label="Yash Nagla Portfolio Home"
              >
                Yash Nagla
              </a>

              {/* Mobile toggle button */}
              {/* <button
                className="navbar-toggler border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button> */}

              {/* Social links */}
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
                    <motion.i
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`${link.icon} text-2c3e50 theme-icon fs-2`}
                    />
                  </a>
                ))}
              </div>
              {/* Navigation links */}
              {/* <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav nav-animate">
                  {navLinks.map((link, index) => (
                    <li className="nav-item" key={index}>
                      <motion.a
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`nav-link fw-medium ${
                          active === link.href ? "active-link" : "text-2c3e50"
                        }`}
                        href={link.href}
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
            <button
              className="btn btn-sm ms-3"
              onClick={() => {
                document.body.classList.toggle("dark-mode");
                setDarkMode(!darkMode);
              }}
            >
              <i className={`fa-solid text-2c3e50 ${darkMode ? "fa-sun" : "fa-moon"} theme-icon fs-2`}></i>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
