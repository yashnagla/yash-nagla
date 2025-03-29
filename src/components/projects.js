import sevayatan from '../image/sevayatan.png'

function Projects() {
    return (
        <>
            {/* Project */}
            <div className="container-fluid py-5 bg-f4f4f4" id='project'>
                <div className="container p-0">
                    <h2 className="text-center text-2c3e50 fw-semibold mb-3">Projects</h2>
                    <div className="row mb-4 g-4">
                        <div className="col-12 col-lg-6">
                            <div className="card p-3 shadow rounded-3">
                                <div className="card-header bg-transparent border-0">
                                    <img src={sevayatan} className='img-fluid border rounded-3 h-100' alt="sevayatan" />
                                </div>
                                <div className="card-body">
                                    <h4 className='text-2c3e50'>Sevayatan Hospital</h4>
                                    <p className='text-374151 fw-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nesciunt dicta suscipit cupiditate. Quidem, itaque iure dolor tempore qui enim.</p>
                                    {/* Technologies */}
                                    <div className="technology d-flex gap-3 overflow-x-scroll py-2" style={{scrollbarWidth : "none"}}>
                                        <span class="badge bg-edf7ed text-6caf50 rounded-pill fw-medium fs-10px px-3 py-1">HTML5</span>
                                        <span class="badge bg-edf7ed text-6caf50 rounded-pill fw-medium fs-10px px-3 py-1">CSS</span>
                                        <span class="badge bg-edf7ed text-6caf50 rounded-pill fw-medium fs-10px px-3 py-1">Bootstrap</span>
                                        <span class="badge bg-edf7ed text-6caf50 rounded-pill fw-medium fs-10px px-3 py-1">JavaScript</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="card p-3 shadow rounded-3">
                                <div className="card-header bg-transparent border-0">
                                    <video controls class="img-fluid object-fit-scale rounded-3" autoplay src="videos/incrypr.mp4" type="video/mp4" />
                                </div>
                                <div className="card-body">
                                    <h4 className='text-2c3e50'>Incrypr</h4>
                                    <p className='text-374151 fw-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nesciunt dicta suscipit cupiditate. Quidem, itaque iure dolor tempore qui enim.</p>
                                    {/* Technologies */}
                                    <div className="technology d-flex gap-3 overflow-x-scroll py-2" style={{scrollbarWidth : "none"}}>
                                        <span class="badge bg-edf7ed text-6caf50 rounded-pill fw-medium fs-10px px-3 py-1">HTML5</span>
                                        <span class="badge bg-edf7ed text-6caf50 rounded-pill fw-medium fs-10px px-3 py-1">CSS</span>
                                        <span class="badge bg-edf7ed text-6caf50 rounded-pill fw-medium fs-10px px-3 py-1">Bootstrap</span>
                                        <span class="badge bg-edf7ed text-6caf50 rounded-pill fw-medium fs-10px px-3 py-1">JavaScript</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Projects;