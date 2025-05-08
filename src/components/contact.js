import React from"react";import mail from"../image/icons/mail.svg";import phone from"../image/icons/call.svg";import location from"../image/icons/location.svg";function Contact(){return<>






            {}



            <div className="container-fluid py-5 bg-f4f4f4"id="contact">



                <div className="container p-0">



                    <h2 className="text-center text-2c3e50 fw-semibold mb-lg-3 m-0">Get In Touch</h2>



                    <div className="row g-3">



                        <div className="col-12 col-lg-4 py-4">



                            <h3 className="text-2c3e50 fw-semibold mb-3">Contact Information</h3>



                            <a href="mailto:naglayash@gmail.com"className="text-decoration-none">



                                <div className="d-flex align-items-center gap-4 mb-3">



                                    <div className="">



                                        <img src={mail}alt=""/>



                                    </div>



                                    <div className="">



                                        <p className="m-0 text-2c3e50">Email</p>



                                        <p className="m-0 text-2c3e50">naglayash@gmail.com</p>



                                    </div>



                                </div>



                            </a>



                            <a href="tel:+917690812357"className="text-decoration-none">



                                <div className="d-flex align-items-center gap-4 mb-3">



                                    <div className="">



                                        <img src={phone}alt=""/>



                                    </div>



                                    <div className="">



                                        <p className="m-0 text-2c3e50">Phone</p>



                                        <p className="m-0 text-2c3e50">+91 76590812357</p>



                                    </div>



                                </div>



                            </a>



                            <div className="d-flex align-items-center gap-4 mb-3">



                                <div className="">



                                    <img src={location}alt=""/>



                                </div>



                                <div className="">



                                    <p className="m-0 text-2c3e50">Location</p>



                                    <p className="m-0 text-2c3e50">Kamla Nehru Nagar, Ajmer Road, Jaipur</p>



                                </div>



                            </div>



                            {}



                            <h4 className="text-2c3e50 mb-3">Follow Me</h4>



                            <div className="social-icons d-flex gap-3">



                                <a href="https://github.com/yashnagla" aria-label="GitHub"><i className="fa-brands fa-github text-white bg-1e3e50 fs-3 bg-f9fafb p-2 rounded-circle"></i></a>



                                <a href="https://www.linkedin.com/in/yash-sikhwal-nagla/" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in text-white bg-1e3e50 fs-3 bg-f9fafb p-2 rounded-circle"></i></a>



                                <a href="https://www.instagram.com/yash.nagla" aria-label="Instagram"><i className="fa-brands fa-instagram text-white bg-1e3e50 fs-3 bg-f9fafb p-2 rounded-circle"></i></a>



                            </div>



                        </div>







                        <div className="col-12 col-lg-8">



                            <form className="bg-white rounded-3 p-4 ">



                                <h3 className="text-2c3e50 mb-4">Send Me a Message</h3>



                                <div className="input-group mb-4">



                                    <span className="input-group-text"id="basic-addon1">Name</span>



                                    <input type="text"className="form-control"aria-label="Username"aria-describedby="basic-addon1"/>



                                </div>







                                <div className="input-group mb-4">



                                    <span className="input-group-text"id="basic-addon2">Email</span>



                                    <input type="text"className="form-control"aria-label="Recipient's username"aria-describedby="basic-addon2"/>



                                </div>







                                <div className="input-group mb-4">



                                    <span className="input-group-text"id="basic-addon2">Subject</span>



                                    <input type="text"className="form-control"aria-label="Recipient's username"aria-describedby="basic-addon2"/>



                                </div>







                                <div className="input-group mb-4">



                                    <span className="input-group-text"id="basic-addon2">Message</span>



                                    <textarea type="text"className="form-control"aria-label="Recipient's username"aria-describedby="basic-addon2"></textarea>



                                </div>







                                <div className="d-flex-justify-content-center justify-content-lg-start">



                                    <button className="btn submit-btn text-white bg-2c3e50">Submit</button>



                                </div>



                            </form>



                        </div>



                    </div>



                </div>



            </div>



        </>}export default Contact;