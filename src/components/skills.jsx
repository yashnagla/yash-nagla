import frontend from "../image/icons/frontend.svg";
import git from "../image/icons/git-github.svg";
import responsiveDesign from "../image/icons/responsive-design.svg";
import sql from "../image/icons/sql.svg";

function Skills() {
  const frontendSkills = [
    { name: "HTML5 & CSS3", level: "94%" },
    { name: "JavaScript (ES6+)", level: "70%" },
    { name: "Bootstrap", level: "90%" },
    { name: "Tailwind CSS", level: "80%" },
    { name: "ReactJS", level: "50%" },
    // { name: "Redux", level: "50%" },
    { name: "Material UI", level: "55%" },
    { name: "UI/UX Design", level: "75%" },
    { name: "REST API Integration", level: "70%" },
    { name: "Web Performance Optimization", level: "65%" },
  ];

  const backendSkills = [
    { name: "MySQL", level: "60%" },
    { name: "NodeJS", level: "55%" },
  ];

  const otherSkills = [
    { name: "Git & GitHub", icon: git },
    { name: "Responsive Design", icon: responsiveDesign },
    // { name: "Database Management (MySQL)", icon: sql },
  ];

  return (
    <section className="container-fluid py-5" id="skills">
      <div className="container p-0">
        {/* Section Heading */}
        <h2 className="text-center text-2c3e50 fw-semibold mb-4">Skills</h2>

        <div className="row justify-content-center mb-5">
          {/* Frontend Skills */}
          <div className="col-12 col-md-6 mb-4">
            <div className="card p-3 shadow h-100">
              <div className="card-header bg-transparent border-0 d-flex align-items-center gap-3">
                <img loading="lazy" src={frontend} className="img-fluid" alt="Frontend Icon" />
                <h3 className="fs-5 fw-semibold text-2c3e50 m-0">Frontend</h3>
              </div>
              <div className="card-body">
                {frontendSkills.map((skill, index) => (
                  <div className="mb-3" key={index}>
                    <div className="d-flex justify-content-between">
                      <span>{skill.name}</span>
                      <span className="text-4b5563">{skill.level}</span>
                    </div>
                    <div
                      className="progress h-10px"
                      role="progressbar"
                      aria-label={`${skill.name} proficiency`}
                      aria-valuenow={parseInt(skill.level)}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-4caf50"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="col-12 col-md-6 mb-4">
            <div className="card p-3 shadow h-100">
              <div className="card-header bg-transparent border-0 d-flex align-items-center gap-3">
                <img loading="lazy" src={frontend} className="img-fluid" alt="Backend Icon" />
                <h3 className="fs-5 fw-semibold text-2c3e50 m-0">Backend</h3>
              </div>
              <div className="card-body">
                {backendSkills.map((skill, index) => (
                  <div className="mb-3" key={index}>
                    <div className="d-flex justify-content-between">
                      <span>{skill.name}</span>
                      <span className="text-4b5563">{skill.level}</span>
                    </div>
                    <div
                      className="progress h-10px"
                      role="progressbar"
                      aria-label={`${skill.name} proficiency`}
                      aria-valuenow={parseInt(skill.level)}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-4caf50"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Skills */}
        <h3 className="text-center text-2c3e50 fw-semibold mb-4">
          Other Skills
        </h3>
        <div className="row g-3 justify-content-center">
          {otherSkills.map((item, index) => (
            <div className="col-12 col-sm-4" key={index}>
              <div className="card p-3 shadow h-100">
                <div className="card-header bg-transparent border-0 d-flex justify-content-center">
                  <img
                    src={item.icon}
                    className="img-fluid"
                    alt={`${item.name} Icon`}
                  />
                </div>
                <div className="card-body p-0 m-0">
                  <p className="text-center fw-semibold">{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;