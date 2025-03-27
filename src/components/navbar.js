import { Link } from 'react-router-dom';
import React from "react";

import logo from "../img/logo.svg"

const Navbar = ({ scrollToMain, scrollToAbout, scrollToEducation, scrollToSkills, scrollToContact }) => {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-white">
                    <div className="container p-0 justify-content-between">
                        <Link className="navbar-brand m-0"><img src={logo} className='img-fluid h-70px w-70px' alt="Logo" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <buttom className="nav-link" onClick={scrollToMain} aria-current="page" to="/">Home</buttom>
                                </li>
                                <li className="nav-item">
                                    <buttom className="nav-link" onClick={scrollToAbout} aria-current="page" to="/about">About</buttom>
                                </li>
                                <li className="nav-item">
                                    <buttom className="nav-link" onClick={scrollToEducation} aria-current="page" to="/education">Education</buttom>
                                </li>
                                <li className="nav-item">
                                    <buttom className="nav-link" onClick={scrollToSkills} aria-current="page" to="/skills">Skills</buttom>
                                </li>
                                <li className="nav-item">
                                    <buttom className="nav-link" onClick={scrollToContact} aria-current="page" to="/contact">Contact</buttom>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;