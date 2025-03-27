import React from 'react'

import ProfilePic from '../img/LinkedIn DP.jpg'

const Mainsection = () => {
  return (
    <>
      <div className="container mb-5" id="top">
        <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-center flex-column">
            <h2 className='fw-bold m-0 fs-2'>Hi i'm</h2>
            <h1 className='fw-bold m-0 display-3'>Yash Nagla</h1>
            <h3 className='fw-semibold m-0 fs-4'>Junior Software Developer</h3>
            <a href="./Yash Nagla.pdf"><button className='btn border border-3 border-dark fw-bold m-0 px-4 py-2 mt-3' style={{width : "fit-content"}}>Resume</button></a>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
                  <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
                </linearGradient>
              </defs>
              <mask id='mask1' mask-type="alpha">
                <path fill="url(#sw-gradient)" d="M28.7,-17.2C34.4,-6.8,34.1,6.4,28.4,16.5C22.6,26.6,11.3,33.5,-0.6,33.9C-12.5,34.2,-24.9,27.9,-31.2,17.5C-37.4,7.2,-37.5,-7.3,-31.3,-18C-25,-28.7,-12.5,-35.8,-0.5,-35.5C11.5,-35.2,23.1,-27.6,28.7,-17.2Z" transform="translate(45 40)"></path>
              </mask>
              <g mask='url(#mask1)'>
                <path fill="url(#sw-gradient)" d="M28.7,-17.2C34.4,-6.8,34.1,6.4,28.4,16.5C22.6,26.6,11.3,33.5,-0.6,33.9C-12.5,34.2,-24.9,27.9,-31.2,17.5C-37.4,7.2,-37.5,-7.3,-31.3,-18C-25,-28.7,-12.5,-35.8,-0.5,-35.5C11.5,-35.2,23.1,-27.6,28.7,-17.2Z" transform="translate(45 40)"></path>
                <image href={ProfilePic} className='img-fluid' style={{height : "85px"}} alt="Profile" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mainsection;