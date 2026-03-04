import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

function Experience() {
  const experienceRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate experience cards
      gsap.from(".experience-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-section",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Animate bullet points
      gsap.from(".experience-card li", {
        x: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".experience-section",
          start: "top 70%",
        },
      });
    }, experienceRef);

    return () => ctx.revert();
  }, []);

  const experienceData = [
    {
      title: "Associate Software Developer",
      company: "KVON Tech",
      duration: "January 2025 - Present",
      responsibilities: [
        "Develop and maintain responsive web applications using React, TypeScript, and Tailwind CSS.",
        "Collaborate with senior developers to implement new features and fix bugs.",
        "Participate in code reviews and provide constructive feedback to team members.",
        "Assist in the implementation of security best practices in web applications.",
      ],
    },
    {
      title: "Front-end Web Intern",
      company: "KVON Tech",
      duration: "September 2024 - December 2024",
      responsibilities: [
        "Developed responsive and user-friendly UI components using React and Tailwind CSS.",
        "Collaborated with senior developers to improve project performance and scalability.",
        "Assisted in debugging, testing, and optimizing existing web applications.",
        "Gained hands-on experience with Git, REST APIs, and project workflows.",
      ],
    },
  ];

  return (
    <section
      ref={experienceRef}
      className="experience-section py-5 bg-light"
      id="experience"
    >
      <div className="container">
        <h2 className="text-center text-2c3e50 fw-semibold mb-5">Experience</h2>

        <div className="row g-4">
          {experienceData.map((exp, index) => (
            <div className="col-12 col-lg-6" key={index}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="border-left-4caf50 rounded-4 p-4 bg-white shadow-sm h-100 experience-card"
                aria-label={`${exp.title} at ${exp.company}`}
              >
                <h3 className="fw-semibold text-2c3e50 mb-1">{exp.title}</h3>
                <p className="mb-2 text-3b6b26">
                  <i className="fa-solid fa-briefcase me-2 text-4caf50"></i>
                  {exp.company}
                </p>
                <p className="mb-3 text-4b5563">
                  <i className="fa-solid fa-calendar me-2 text-4caf50"></i>
                  {exp.duration}
                </p>
                <ul className="text-4b5563 ps-3 mb-0">
                  {exp.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
