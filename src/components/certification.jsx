function Certification() {
  const certifications = [
    {
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "November 2024",
      ariaLabel: "CompTIA Security Plus certification details",
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "August 2022",
      ariaLabel: "React Developer Certification details",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "March 2021",
      ariaLabel: "Responsive Web Design certification details",
    },
  ];

  return (
    <section className="certification-section py-5 bg-light" id="certification">
      <div className="container">
        {/* Section Title */}
        <h2 className="text-center text-2c3e50 fw-semibold mb-5">
          Certifications
        </h2>

        <div className="row g-4">
          {certifications.map((cert, index) => (
            <div key={index} className="col-12 col-lg-4">
              <div
                className="cert-card border-left-4caf50 rounded-4 p-4 bg-white shadow-sm h-100"
                aria-label={cert.ariaLabel}
              >
                <h5 className="fw-semibold text-2c3e50">{cert.title}</h5>

                <p className="mb-2 text-374151">
                  <i className="fa-solid fa-briefcase me-2 text-4caf50"></i>
                  <strong>Issued by:</strong> {cert.issuer}
                </p>

                <p className="mb-0 text-4b5563">
                  <i className="fa-solid fa-calendar me-2 text-4caf50"></i>
                  {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;