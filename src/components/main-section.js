// import { jsPDF } from 'jspdf';

import profilePic from '../image/LinkedIn-DP.png'
// import ResumePDF from './pdf/Yash Nagla.pdf'


function Main() {
    return (
        <>
            {/* Main section */}
            <section className="main-section pt-5 pb-3 d-flex align-items-center" id='main-section'>
                <div className="container-fluid py-5 py-lg-0">
                    <div className="container px-0">
                        <div className="row g-3 g-lg-5">
                            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                                <h1 className="text-center text-lg-start display-4 fw-semibold text-2c3e50">Hi, I'm Yash Nagla</h1>
                                <h2 className="text-center text-lg-start fs-2 fw-semibold text-6caf50">Junior Software Developer</h2>
                                <h3 className="text-center text-lg-start text-333333 mb-4">Passionate about front-end development, creating responsive web applications.</h3>
                                <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                                    <a className='text-decoration none' href="https://github.com/yashnagla"><button className="btn bg-2c3e50 px-lg-3 py-lg-2 fw-semibold text-white view-work-btn">View My Work</button></a>
                                    <a className='text-decoration none text-black' href="pdf/Yash Nagla.pdf"><button className="btn bg-f4a261 px-lg-3 py-lg-2 fw-semibold download-resume-btn"><i class="fa-solid fa-download"></i> Download Resume</button></a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
                                <img src={profilePic} className='border-4caf50 img-fluid rounded-circle profilepic-height' alt="profilePic" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
  
export default Main;