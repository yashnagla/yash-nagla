import aboutSectionImage from "../image/about-section-image.svg";

function About() {
  const aboutData = {
    title: "About Me",
    image: {
      src: aboutSectionImage,
      alt: "Yash Nagla Front-End Developer Portfolio Illustration",
    },
    paragraphs: [
      `I’m a Front-End Developer & IT Consultant passionate about building intuitive, performance-driven web applications that scale globally and elevate user experience. Proficient in ReactJS and JavaScript (ES6+), I specialize in developing responsive, scalable, and visually engaging web solutions.`,
      `My expertise spans across UI/UX development, REST API integration, and performance optimization using tools such as Redux, Material UI, Tailwind CSS, and Bootstrap.`,
      `Having collaborated with diverse tech teams, I bring a balance of technical precision, agile development practices, and design thinking to every project. I’m currently open to opportunities in web development, product design, and user experience engineering — especially with innovative, global-focused tech companies.`,
    ],
  };

  return (
    <section className="container-fluid py-5" id="about">
      <div className="container p-0">
        {/* Section Title */}
        <h2 className="text-center text-2c3e50 fw-semibold mb-4">
          {aboutData.title}
        </h2>

        <div className="row align-items-center">
          {/* About Image */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-center">
            <img
              src={aboutData.image.src}
              className="img-fluid rounded-3"
              alt={aboutData.image.alt}
              loading="lazy"
            />
          </div>

          {/* About Description */}
          <div className="col-12 col-lg-6">
            {aboutData.paragraphs.map((text, index) => (
              <p key={index} className="text-333333 fs-6 mb-3">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
