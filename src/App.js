import './App.css';
import About from './components/about';
import Certification from './components/certification';
import Contact from './components/contact';
import Education from './components/education';
import Experience from './components/experience';
import Footer from './components/footer';
import Main from './components/main-section';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Skills from './components/skills';

function App() {
  return (
    <>
      <div className="h-100vh bg-f4f4f4">
        <Navbar />
        <Main />
      </div>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      {/* <Certification /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
