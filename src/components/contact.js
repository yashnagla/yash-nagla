import React from 'react'

import Mail from '../img/icons/GMail.svg'
import WhatsApp from '../img/icons/Whats App.svg'
import Call from '../img/icons/Call.svg'
import GitHub from '../img/icons/GitHub.svg'
import LinkedIn from '../img/icons/LinkedIn.svg'

const Contact = () => {
    return (
      <>
        <div className="container mb-5" id='contact'>
          <h2 className='text-center mb-3 fw-bold'>Follow Me On</h2>
          <div className='d-flex justify-content-evenly justify-content-md-center gap-3'>
            <a href="https://api.whatsapp.com/send?phone=7690812357" target="_blank"><img src={WhatsApp} className='img-fluid h-35px w-35px' alt="" /></a>
            <a href="mailto:'naglayash@gmail.com'" target="_blank"><img src={Mail} className='img-fluid h-35px w-35px' alt="" /></a>
            <a href="tel:+917690812357" target="_blank"><img src={Call} className='img-fluid h-35px w-35px' alt="" /></a>
            <a href="https://github.com/yashnagla" target="_blank"><img src={GitHub} className='img-fluid h-35px w-35px' alt="" /></a>
            <a href="https://linkedin.com/in/yash-sikhwal-nagla" target="_blank"><img src={LinkedIn} className='img-fluid h-35px w-35px' alt="" /></a>
          </div>
        </div>
      </>
    )
  }
  
  export default Contact;