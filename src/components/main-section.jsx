import profileImg from "../image/LinkedIn-DP.webp";

function Main() {
  return (
    <section
      className="main-section d-flex align-items-center min-vh-100"
      id="main-section"
    >
      <div className="container-fluid">
        <div className="container px-0">
          <div className="row align-items-center gap-5 gap-lg-0">
            {/* Left Content */}
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center text-center text-lg-start">
              <h1 className="display-4 fw-semibold text-2c3e50 mb-2">
                Hi, I'm <span className="text-highlight">Yash Nagla</span>
              </h1>

              <h2 className="fs-3 fw-semibold text-3b6b26 mb-3">
                Front-End Developer (React, JavaScript)
              </h2>

              <p className="text-333333 fs-6 mb-4">
                Crafting fast, responsive, and modern web experiences that combine
                <strong> clean design</strong> and <strong> robust functionality</strong>.
              </p>

              {/* Call to Action Buttons */}
              <div className="d-flex justify-content-center justify-content-lg-start gap-3 flex-wrap">
                <a
                  className="text-decoration none"
                  href="https://github.com/yashnagla"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View my projects on GitHub"
                >
                  <button className="btn bg-2c3e50 px-lg-3 py-lg-2 fw-semibold text-white view-work-btn">
                    <i className="fa-brands fa-github me-2"></i> View My Work
                  </button>
                </a>

                <a
                  className="text-decoration none"
                  href="pdf/Yash Nagla.pdf"
                  download="Yash_Nagla_Resume.pdf"
                  aria-label="Download Yash Nagla Resume"
                >
                  <button className="btn bg-f4a261 px-lg-3 py-lg-2 fw-semibold download-resume-btn text-black">
                    <i className="fa-solid fa-download me-2"></i> Download Resume
                  </button>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-12 col-lg-6 text-center text-lg-end">
              <img
                src={profileImg}
                className="img-fluid maintain-images"
                alt="Yash Nagla Front-End Developer"
                loading="eager"
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