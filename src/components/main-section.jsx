import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

import profileImg from "../image/LinkedIn-DP.webp";

function Main() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".letter",
          {
            y: 60,
            opacity: 0,
            stagger: 0.05,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.4",
        )
        .from(
          ".hero-subtitle",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6",
        )
        .from(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6",
        )
        .from(
          ".hero-buttons",
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.6",
        )
        .from(
          ".hero-image",
          {
            scale: 0.7,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.8",
        );

      gsap.to(".hero-image", {
        y: 15,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="main-section d-flex align-items-center min-vh-100"
      id="main-section"
    >
      <div className="container-fluid">
        <div className="container px-0">
          <div className="row align-items-center gap-5 gap-lg-0">
            {/* Left Content */}
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center text-center text-lg-start">
              <h1 className="hero-title display-4 fw-semibold text-2c3e50 mb-2">
                Hi, I'm{" "}
                <span className="text-highlight hero-name">
                  {"Yash Nagla".split("").map((char, index) => (
                    <span key={index} className="letter">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
              </h1>

              <h2 className="hero-subtitle fs-3 fw-semibold text-3b6b26 mb-3">
                Front-End Developer (React, JavaScript)
              </h2>

              <p className="hero-description text-333333 fs-6 mb-4">
                Crafting fast, responsive, and modern web experiences that
                combine
                <strong> clean design</strong> and{" "}
                <strong> robust functionality</strong>.
              </p>

              {/* Call to Action Buttons */}
              <div className="hero-buttons d-flex justify-content-center justify-content-lg-start gap-3 flex-wrap">
                <a
                  className="text-decoration-none"
                  href="https://github.com/yashnagla"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View my projects on GitHub"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="btn bg-2c3e50 px-lg-3 py-lg-2 fw-semibold text-white view-work-btn"
                  >
                    <i className="fa-brands fa-github me-2"></i> View My Work
                  </motion.button>
                </a>

                <a
                  className="text-decoration-none"
                  href="pdf/Yash Nagla.pdf"
                  download="Yash_Nagla_Resume.pdf"
                  aria-label="Download Yash Nagla Resume"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="btn bg-f4a261 px-lg-3 py-lg-2 fw-semibold download-resume-btn text-black"
                  >
                    <i className="fa-solid fa-download me-2"></i> Download
                    Resume
                  </motion.button>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-12 col-lg-6 text-center text-lg-end">
              <img
                src={profileImg}
                className="hero-image img-fluid maintain-images"
                alt="Yash Nagla Front-End Developer"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
