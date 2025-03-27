import React from 'react'

import HTML from '../img/icons/HTML5.svg'
import CSS from '../img/icons/CSS3.svg'
import Boostrap from '../img/icons/Bootstrap.svg'
import JS from '../img/icons/JavaScript.svg'
import ReactJS from '../img/icons/ReactJS.svg'
import MySQL from '../img/icons/MySQL.svg'
import GitHub from '../img/icons/GitHub.svg'
import Git from '../img/icons/Git.svg'

const Skills = () => {
  return (
    <>
        <div className="container mb-5" id='skills'>
            <h2 className='text-center mb-3 fw-bold'>Skills</h2>
            <div className="row justify-content-center">
                {/* <div className="col d-flex justify-content-center align-items-center"> */}
                    <div className="card border-0 justify-content-center align-items-center" style={{width : "10rem"}}>
                        <img src={HTML} className="card-img-top img-fluid h-70px w-70px" alt="HTML" />
                        <div className="card-body">
                            <h5 className="card-title text-center">HTML</h5>
                        </div>
                    </div>
                {/* </div>
                <div className="col d-flex justify-content-center align-items-center"> */}
                    <div className="card border-0 justify-content-center align-items-center" style={{width : "10rem"}}>
                        <img src={CSS} className="card-img-top img-fluid h-70px w-70px" alt="CSS" />
                        <div className="card-body">
                            <h5 className="card-title text-center">CSS</h5>
                        </div>
                    </div>
                {/* </div>
                <div className="col d-flex justify-content-center align-items-center"> */}
                    <div className="card border-0 justify-content-center align-items-center" style={{width : "10rem"}}>
                        <img src={Boostrap} className="card-img-top img-fluid h-70px w-70px" alt="Bootstrap" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Bootstrap</h5>
                        </div>
                    </div>
                {/* </div>
                <div className="col d-flex justify-content-center align-items-center"> */}
                    <div className="card border-0 justify-content-center align-items-center" style={{width : "10rem"}}>
                        <img src={JS} className="card-img-top img-fluid h-70px w-70px" alt="JavaScript" />
                        <div className="card-body">
                            <h5 className="card-title text-center">JavaScript</h5>
                        </div>
                    </div>
                {/* </div>
                <div className="col d-flex justify-content-center align-items-center"> */}
                    <div className="card border-0 justify-content-center align-items-center" style={{width : "10rem"}}>
                        <img src={ReactJS} className="card-img-top img-fluid h-70px w-70px" alt="ReactJS" />
                        <div className="card-body">
                            <h5 className="card-title text-center">ReactJS</h5>
                        </div>
                    </div>
                {/* </div>
                <div className="col d-flex justify-content-center align-items-center"> */}
                    <div className="card border-0 justify-content-center align-items-center" style={{width : "10rem"}}>
                        <img src={MySQL} className="card-img-top img-fluid h-70px w-70px" alt="MySQL" />
                        <div className="card-body">
                            <h5 className="card-title text-center">MySQL</h5>
                        </div>
                    </div>
                {/* </div>
                <div className="col d-flex justify-content-center align-items-center"> */}
                    <div className="card border-0 justify-content-center align-items-center" style={{width : "10rem"}}>
                        <img src={Git} className="card-img-top img-fluid h-70px w-70px" alt="Figma" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Git</h5>
                        </div>
                    </div>
                {/* </div>
                <div className="col d-flex justify-content-center align-items-center"> */}
                    <div className="card border-0 justify-content-center align-items-center" style={{width : "10rem"}}>
                        <img src={GitHub} className="card-img-top img-fluid h-70px w-70px" alt="Figma" />
                        <div className="card-body">
                            <h5 className="card-title text-center">GitHub</h5>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    </>
  )
}

export default Skills;