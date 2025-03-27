import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Mainsection from './components/x';
import About from './components/about';
import Education from './components/education';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import CallToAction from './components/call-to-action';

function App() {
  // Create refs for each section
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle smooth scroll to section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="container-fluid p-0">
        
        {/* NavBar */}
        <Navbar 
          scrollToMain={() => scrollToSection(mainRef)} 
          scrollToAbout={() => scrollToSection(aboutRef)}
          scrollToEducation={() => scrollToSection(educationRef)} 
          scrollToSkills={() => scrollToSection(skillsRef)} 
          scrollToContact={() => scrollToSection(contactRef)}
        />
        
        {/* Mainsection with ref */}
        <Mainsection ref={mainRef}/>
        
        {/* About with ref */}
        <About ref={aboutRef} />
        
        {/* Education with ref */}
        <Education ref={educationRef} /> 
        
        {/* Skills with ref */}
        <Skills ref={skillsRef} />
        
        {/* Contact with ref */}
        <Contact ref={contactRef} />

        {/* Call To Action */}
        <CallToAction />

        {/* Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;