import sevayatan from "../image/sevayatan.webp";
import sbcet from "../image/sbcet.webp";

function Projects() {
  const projectData = [
    {
      title: "Sevayatan Hospital",
      image: sevayatan,
      alt: "Sevayatan Hospital Website Screenshot",
      description: [
        "As a Front-End Developer, I contributed to building a comprehensive and user-friendly hospital website aimed at providing detailed information about the hospital's services, departments, and medical professionals. The website was developed using HTML, CSS, JavaScript, and Bootstrap to ensure responsive design and cross-device compatibility. I was responsible for crafting clean and structured layouts across multiple pages including Home, About Us, Center of Excellence, RGHS, Gallery, Doctors, TPA/Insurance, and Contact Us.",
        "The Center of Excellence section featured dedicated subpages for departments such as General Surgery, Medicine, Obstetrics & Gynecology, Orthopedics, Pediatrics, Urology, Plastic Surgery, Anesthesiology, and more, including essential services like NICU, Laboratory, Sonography, and 24x7 Emergency & Ambulance services. My focus was on delivering a seamless UI/UX experience, intuitive navigation, and accessibility for users seeking medical information. This project enhanced my skills in structuring healthcare-focused digital solutions.",
      ],
      technologies: ["HTML5", "CSS", "Bootstrap", "JavaScript"],
    },
    {
      title: "SBCET College Website",
      image: sbcet,
      alt: "SBCET College Website Screenshot",
      description: [
        "As a Front-End Developer, I contributed to the design and development of the official website for Sri Balaji College of Engineering & Technology (SBCET) using HTML, CSS, JavaScript, and Bootstrap. The project aimed to provide a structured and engaging platform for students, faculty, and visitors to access institutional information.",
        "I was responsible for implementing responsive layouts and clear navigation across multiple sections, including Home, About Us, Programs, Examination, Training & Placement, Admission, Online Grievance, and Contact Us. The Programs section covered detailed course information for departments like CSE (UG/PG), AI, Cyber Security, Data Science, Electrical, Mechanical, MCA, and more.",
        "A unique section, Life@SBCET, highlighted student engagement with Clubs (Innovation, Rhythm, Social, etc.), events like Manthan, and facilities like the gym, hostels, library, and sports. I ensured a clean user interface and smooth browsing experience for users exploring the college's academic and campus life.",
      ],
      technologies: ["HTML5", "CSS", "Bootstrap", "JavaScript"],
    },
  ];

  return (
    <section className="container-fluid py-5" id="project">
      <div className="container p-0">
        <h2 className="text-center text-2c3e50 fw-semibold mb-4">Projects</h2>

        <div className="row g-4">
          {projectData.map((project, index) => (
            <div className="col-12" key={index}>
              <div className="row p-3 shadow rounded-3 bg-white">
                {/* Project Image */}
                <div className="col-12 col-lg-6 mb-3 mb-lg-0">
                  <img
                    src={project.image}
                    className="img-fluid rounded-3 maintain-images"
                    alt={project.alt}
                  />
                </div>

                {/* Project Details */}
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                  <h3 className="text-2c3e50 mb-2">{project.title}</h3>

                  <div
                    className="text-374151 fw-500 overflow-y-scroll"
                    style={{ height: "220px", scrollbarWidth: "none" }}
                  >
                    {project.description.map((para, i) => (
                      <p className="mb-2" key={i}>
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div
                    className="technology d-flex gap-3 overflow-x-scroll py-2"
                    style={{ scrollbarWidth: "none" }}
                  >
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="badge bg-edf7ed text-3b6b26 rounded-pill fw-medium fs-14px px-3 py-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;