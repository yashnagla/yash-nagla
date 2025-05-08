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
                        <div className="col-12 col-lg-6">
                            {/* <p className="text-333333 fs-6 m-0">As a highly motivated junior software developer with a strong foundation in web development technologies, including HTML, CSS, Bootstrap, JavaScript, ReactJS, Git, GitHub, and MySQL, I am eager to contribute to your team. I have honed my technical expertise through both academic learning and practical experience, allowing me to effectively build responsive, dynamic, and user-friendly web applications. My ability to quickly adapt and learn new technologies, along with my strong teamwork and communication skills, enables me to collaborate effectively in a fast-paced environment. I am confident that my passion for technology and my drive to continuously improve will make me a valuable asset to your team.</p> */}
                            {/* <p className="text-333333 fs-6 m-0">As a motivated student with strong web development (HTML, CSS, Bootstrap, JavaScript, ReactJS, Git, GitHub, MySQL) skills, I am well-prepared to contribute effectively to your team. My technical expertise, quick learning, and collaborative abilities make me an ideal candidate for this position, combining solid foundations in both fields with strong teamwork, communication, and adaptability skills.</p> */}
                            <p className="text-333333 fs-6 m-0">Front-End Web Developer with over 1 year of hands-on experience in building responsive and interactive websites using HTML, CSS, JavaScript, Bootstrap, and React.js. Skilled in translating design concepts into user-friendly interfaces with a focus on performance and accessibility. Experienced in working within cross-functional teams during internships and project development. Adept at writing clean, maintainable code and ensuring cross-browser compatibility. Strong understanding of modern web development practices and version control tools like Git. Passionate about learning new technologies and continuously improving user experiences through innovative and scalable front-end solutions. Actively seeking opportunities to grow in a collaborative and fast-paced environment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;