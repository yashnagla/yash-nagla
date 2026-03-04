import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".footer-animate", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

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
    <footer ref={footerRef} className="bg-2c3e50 text-white footer-section">
      {/* Main Footer Section */}
      <div className="container-fluid py-5">
        <div className="container p-0">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start gap-4">
            {/* Left Section */}
            <div className="footer-animate">
              <h2 className="fw-semibold m-0">Yash Nagla</h2>
              <h3 className="fs-5 text-light m-0">
                Associate Software Developer
              </h3>
            </div>

            {/* Contact / Social Section */}
            <div className="footer-animate">
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
                    <motion.i
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`${link.icon} fs-2 p-2 rounded-circle`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="py-3 border-top border-secondary text-center fs-6 footer-animate">
        <p className="m-0">
          &copy; {new Date().getFullYear()} <strong>Yash Nagla</strong>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
