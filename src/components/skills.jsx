import frontend from"../image/icons/frontend.svg";import git from"../image/icons/git-github.svg";import responsiveDesign from"../image/icons/responsive-design.svg";import sql from"../image/icons/sql.svg";function Skills(){return<>



            {}



            <div className="container-fluid py-5"id="skills">



                <div className="container p-0">



                    <h2 className="text-center text-2c3e50 fw-semibold mb-3">Skills</h2>



                    <div className="row justify-content-center mb-4">



                        <div className="col-12 col-sm-6 mb-3 mb-sm-0">



                            <div className="card p-3 shadow">



                                <div className="card-header bg-transparent border-0 d-flex gap-3 align-items-center">



                                    <img src={frontend}className="img-fliud"alt="Front End Pic"/>



                                    <p className="fs-5 fw-semibold text-2c3e50 m-0">Frontend</p>



                                </div>



                                <div className="card-body">



                                    {}



                                    <div className="html mb-3">



                                        <div className="d-flex justify-content-between">



                                            <span className="mb-1">HTML5</span>



                                            <span className="mb-1 text-4b5563">94%</span>



                                        </div>



                                        <div className="progress h-10px"role="progressbar"aria-label="Success example"aria-valuenow="25"aria-valuemin="0"aria-valuemax="100">



                                            <div className="progress-bar bg-4caf50"style={{width:"94%"}}></div>



                                        </div>



                                    </div>



                                    {}



                                    <div className="css mb-3">



                                        <div className="d-flex justify-content-between">



                                            <span className="mb-1">CSS3</span>



                                            <span className="mb-1 text-4b5563">80%</span>



                                        </div>



                                        <div className="progress h-10px"role="progressbar"aria-label="Success example"aria-valuenow="25"aria-valuemin="0"aria-valuemax="100">



                                            <div className="progress-bar bg-4caf50"style={{width:"80%"}}></div>



                                        </div>



                                    </div>



                                    {}



                                    <div className="bootstrap mb-3">



                                        <div className="d-flex justify-content-between">



                                            <span className="mb-1">Bootstrap</span>



                                            <span className="mb-1 text-4b5563">93%</span>



                                        </div>



                                        <div className="progress h-10px"role="progressbar"aria-label="Success example"aria-valuenow="25"aria-valuemin="0"aria-valuemax="100">



                                            <div className="progress-bar bg-4caf50"style={{width:"93%"}}></div>



                                        </div>



                                    </div>



                                    {}



                                    <div className="javascript mb-3">



                                        <div className="d-flex justify-content-between">



                                            <span className="mb-1">JavaScript</span>



                                            <span className="mb-1 text-4b5563">60%</span>



                                        </div>



                                        <div className="progress h-10px"role="progressbar"aria-label="Success example"aria-valuenow="25"aria-valuemin="0"aria-valuemax="100">



                                            <div className="progress-bar bg-4caf50"style={{width:"60%"}}></div>



                                        </div>



                                    </div>



                                    {}



                                    <div className="react mb-3">



                                        <div className="d-flex justify-content-between">



                                            <span className="mb-1">React</span>



                                            <span className="mb-1 text-4b5563">75%</span>



                                        </div>



                                        <div className="progress h-10px"role="progressbar"aria-label="Success example"aria-valuenow="25"aria-valuemin="0"aria-valuemax="100">



                                            <div className="progress-bar bg-4caf50"style={{width:"75%"}}></div>



                                        </div>



                                    </div>



                                </div>



                            </div>



                        </div>



                        <div className="col-12 col-sm-6">



                            <div className="card p-3 shadow h-100">



                                <div className="card-header bg-transparent border-0 d-flex gap-3 align-items-center">



                                    <img src={frontend}className="img-fliud"alt="Front End Pic"/>



                                    <p className="fs-5 fw-semibold text-2c3e50 m-0">Backend</p>



                                </div>



                                <div className="card-body">



                                    {}



                                    <div className="html mb-3">



                                        <div className="d-flex justify-content-between">



                                            <span className="mb-1">MySQL</span>



                                            <span className="mb-1 text-4b5563">40%</span>



                                        </div>



                                        <div className="progress h-10px"role="progressbar"aria-label="Success example"aria-valuenow="25"aria-valuemin="0"aria-valuemax="100">



                                            <div className="progress-bar bg-4caf50"style={{width:"40%"}}></div>



                                        </div>



                                    </div>



                                    {}



                                    <div className="html mb-3">



                                        <div className="d-flex justify-content-between">



                                            <span className="mb-1">NodeJS</span>



                                            <span className="mb-1 text-4b5563">50%</span>



                                        </div>



                                        <div className="progress h-10px"role="progressbar"aria-label="Success example"aria-valuenow="25"aria-valuemin="0"aria-valuemax="100">



                                            <div className="progress-bar bg-4caf50"style={{width:"50%"}}></div>



                                        </div>



                                    </div>



                                </div>



                            </div>



                        </div>



                    </div>



                    <h3 className="text-center text-2c3e50 fw-semibold mb-3">Other Skills</h3>



                    <div className="row g-3 justify-content-center">



                        <div className="col-12 col-sm-4">



                            <div className="card p-3 shadow">



                                <div className="card-header bg-transparent border-0 d-flex justify-content-center">



                                    <img src={git}className="img-fliud"alt="Front End Pic"/>



                                </div>



                                <div className="card-body p-0 m-0">



                                    <p className="text-center fw-semibold">Git & GitHub</p>



                                </div>



                            </div>



                        </div>



                        <div className="col-12 col-sm-4">



                            <div className="card p-3 shadow">



                                <div className="card-header bg-transparent border-0 d-flex justify-content-center">



                                    <img src={responsiveDesign}className="img-fliud"alt="Front End Pic"/>



                                </div>



                                <div className="card-body p-0 m-0">



                                    <p className="text-center fw-semibold">Responsive Design</p>



                                </div>



                            </div>



                        </div>



                        <div className="col-12 col-sm-4">



                            <div className="card p-3 shadow">



                                <div className="card-header bg-transparent border-0 d-flex justify-content-center">



                                    <img src={sql}className="img-fliud"alt="Front End Pic"/>



                                </div>



                                <div className="card-body p-0 m-0">



                                    <p className="text-center fw-semibold">MySQL</p>



                                </div>



                            </div>



                        </div>



                    </div>



                </div>







            </div>



        </>}export default Skills;