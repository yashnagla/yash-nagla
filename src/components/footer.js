function Footer() {
    return (
        <>
            {/* Footer */}
            <div className="container-fluid py-5 bg-2c3e50">
                <div className="container p-0">
                    <div className="d-flex justify-content-between flex-column flex-md-row g-3 text-white text-center text-md-start">
                        <div className="py-3 py-lg-0">
                            <h2 className="fw-semibold">Yash Nagla</h2>
                            <h4>Junior Software Developer</h4>
                        </div>
                        <div>
                            <h3 className="fw-semibold">Get in Touch</h3>
                            <div className="social-icons d-flex gap-3 justify-content-center">
                                <a href="https://github.com/yashnagla"><i className="fa-brands fa-github text-white bg-1e3e50 fs-3 bg-f9fafb p-2 rounded-circle"></i></a>
                                <a href="https://www.linkedin.com/in/yash-sikhwal-nagla/"><i className="fa-brands fa-linkedin-in text-white bg-1e3e50 fs-3 bg-f9fafb p-2 rounded-circle"></i></a>
                                <a href="https://www.instagram.com/yash.nagla"><i className="fa-brands fa-instagram text-white bg-1e3e50 fs-3 bg-f9fafb p-2 rounded-circle"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="m-0 pb-3 bg-2c3e50 text-white text-center fs-5">&copy;2025 Yash Nagla. All rights reserved.</p>
        </>
    );
}

export default Footer;