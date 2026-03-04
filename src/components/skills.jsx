import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import frontend from "../image/icons/frontend.svg";
import git from "../image/icons/git-github.svg";
import responsiveDesign from "../image/icons/responsive-design.svg";
import sql from "../image/icons/sql.svg";

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate progress bars
      gsap.fromTo(
        ".progress-bar",
        { width: 0 },
        {
          width: (i, el) => el.getAttribute("data-level"),
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".skills-animate",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      // Fade in cards
      gsap.from(".skills-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-animate",
          start: "top 80%",
        },
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  const frontendSkills = [
    { name: "HTML5", icon: "fa-brands fa-html5" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "React", icon: "fa-brands fa-react" },
    { name: "Tailwind", icon: "fa-brands fa-tailwind-css" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
    { name: "REST API", icon: "fa-solid fa-code" },
  ];

  const backendSkills = [
    { name: "NodeJS", icon: "fa-node-js" },
    { name: "MySQL", icon: "fa-database" },
  ];

  const otherSkills = [
    { name: "Git & GitHub", icon: "fa-brands fa-github" },
    { name: "Responsive Design", icon: "fa-solid fa-mobile-screen" },
    // { name: "MySQL", icon: "fa-solid fa-database" },
  ];

  return (
    <section
      ref={skillsRef}
      className="container-fluid py-3 skills-animate"
      id="skills"
    >
      <div className="container p-0">
        {/* Section Heading */}
        <h2 className="text-center text-2c3e50 fw-semibold mb-4">Skills</h2>

        <div className="row justify-content-center mb-2">
          {/* Frontend Skills */}
          <div className="col-12 col-md-6 mb-2">
            <div className="card p-3 shadow h-100 skills-card">
              <div className="card-header bg-transparent border-0 d-flex align-items-center gap-3">
                <img
                  loading="lazy"
                  src={frontend}
                  className="img-fluid"
                  alt="Frontend Icon"
                />
                <h3 className="fs-5 fw-semibold text-2c3e50 m-0">Frontend</h3>
              </div>
              <div className="skill-grid">
                {frontendSkills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <i className={`${skill.icon} skill-icon`}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Other Skills */}
          <div className="col-12 col-md-6 mb-2">
            <div className="card p-3 shadow h-100 skills-card">
              <div className="card-header bg-transparent border-0 d-flex align-items-center gap-3">
                <img
                  loading="lazy"
                  src={frontend}
                  className="img-fluid"
                  alt="Frontend Icon"
                />
                <h3 className="fs-5 fw-semibold text-2c3e50 m-0">
                  Other Skills
                </h3>
              </div>

              <div className="card-body">
                <div className="skill-grid">
                  {otherSkills.map((skill, index) => (
                    <div className="skill-item" key={index}>
                      <i className={`${skill.icon} skill-icon`}></i>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
