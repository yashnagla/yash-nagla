import './App.css';import About from './components/about';import Contact from './components/contact';import Education from './components/education';import Experience from './components/experience';import Footer from './components/footer';import Main from './components/main-section';import Navbar from './components/navbar';import Projects from './components/projects';import Skills from './components/skills';import { Helmet } from "react-helmet";function App(){return<>

      <div className="h-100vh">
            
            <Navbar />

            <Main />

      </div>

      <About />

      <Skills />

      <Projects />

      <Experience />

      <Education />

      <Contact />

      <Footer />

    </>}export default App;