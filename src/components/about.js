import aboutImage from '../image/updated.png'

function About() {
    return (
        <>
            {/* About Section */}
            <div className="container-fluid py-5" id='about'>
                <div className="container p-0">
                    <h2 className="text-center text-2c3e50 fw-semibold mb-3">About Me</h2>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <img src={aboutImage} className='img-fluid rounded-3 w-100 mb-3 mb-lg-0' alt="profilePic" />
                        </div>
                        <div className="col-12 col-lg-6 d-flex align-items-center">
                            <p className="text-333333 fs-6 m-0">As a highly motivated student with a strong foundation in web development technologies, including HTML, CSS, Bootstrap, JavaScript, ReactJS, Git, GitHub, and MySQL, I am eager to contribute to your team. I have honed my technical expertise through both academic learning and practical experience, allowing me to effectively build responsive, dynamic, and user-friendly web applications. My ability to quickly adapt and learn new technologies, along with my strong teamwork and communication skills, enables me to collaborate effectively in a fast-paced environment. I am confident that my passion for technology and my drive to continuously improve will make me a valuable asset to your team.</p>
                            {/* <p className="text-333333 fs-6 ">As a motivated student with strong web development (HTML, CSS, Bootstrap, JavaScript, ReactJS, Git, GitHub, MySQL) skills, I am well-prepared to contribute effectively to your team. My technical expertise, quick learning, and collaborative abilities make me an ideal candidate for this position, combining solid foundations in both fields with strong teamwork, communication, and adaptability skills.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;