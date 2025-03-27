import React from 'react'

const Education = () => {
  return (
    <>
        <div className="container mb-5" id='education'>
            <h2 className='text-center mb-3 fw-bold'>Education Details</h2>
            <p className='text-success fw-bold'>B.Tech in Artificial Intelligence & Data Science, <span className='text-danger'>Poornima Group of Institution, Jaipur,</span> <span className='text-warning'>2024</span></p>
            
            <p className='text-success fw-bold'>Senior Secondary School Certificate (In Science Maths), <span className='text-danger'>Rajsthan Board of Secondary Education (RBSE), Ajmer,</span> <span className='text-warning'>2020</span></p>
            
            <p className='text-success fw-bold'>Secondary School Certificate, <span className='text-danger'>Rajsthan Board of Secondary Education (RBSE), Ajmer,</span> <span className='text-warning'>2018</span></p>
            {/* <p className='text-success fw-bold'>Matriculation, <span className='text-danger'>Bright Future Sr. Sec. School, Jaipur,</span> <span className='text-warning'>June, 2018</span></p> */}
        </div>
    </>
  )
}

export default Education;