import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

function Education() {

  const educationRef = useRef(null);

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {

    gsap.from(".education-card", {
      y: 60,
      scale: 0.95,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".education-section",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

  }, educationRef);

  return () => ctx.revert();
}, []);

  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Artificial Intelligence and Data Science",
      institution: "Poornima College of Engineering",
      duration: "2020 - 2024",
      iconWork: "fa-solid fa-briefcase",
      iconCalendar: "fa-solid fa-calendar",
    },
  ];

  return (
    <section
  ref={educationRef}
  className="education-section py-5 bg-light"
  id="education"
>
      <div className="container">
        <h2 className="text-center text-2c3e50 fw-semibold mb-5">
          Education
        </h2>

        <div className="row g-4">
          {educationData.map((edu, index) => (
            <div className="col-12" key={index}>
              <motion.div
  whileHover={{ y: -6 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="border-left-4caf50 rounded-4 p-4 bg-white shadow-sm h-100 education-card"

                aria-label={`${edu.degree} in ${edu.field}`}
              >
                <h3 className="fw-semibold text-2c3e50 mb-1">{edu.degree}</h3>
                <h4 className="fw-normal text-3b6b26 mb-2">{edu.field}</h4>
                <p className="mb-2 text-374151">
                  <i className={`${edu.iconWork} me-2 text-4caf50`}></i>
                  {edu.institution}
                </p>
                <p className="mb-0 text-4b5563">
                  <i className={`${edu.iconCalendar} me-2 text-4caf50`}></i>
                  {edu.duration}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;