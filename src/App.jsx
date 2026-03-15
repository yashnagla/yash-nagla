import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Education from "./components/education";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Main from "./components/main-section";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Loader from "./components/Loader";

import LazySection from "./components/LazySection";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    gsap.to(".scroll-progress", {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <>
      {/* <Loader /> */}
      <div className="cursor"></div>
      {/* Hidden honeypot link for bot detection */}
      <a href="/hidden-trap" style={{ display: "none" }}>
        Do not click
      </a>

      <div id="hero" className="h-100vh">
        <div className="scroll-progress"></div>
        <Navbar />

        <Main />
      </div>

      <LazySection height="70vh">
        <section id="about">
          <About />
        </section>
      </LazySection>

      <LazySection height="70vh">
        <section id="skills">
          <Skills />
        </section>
      </LazySection>

      <LazySection height="70vh">
        <section id="projects">
          <Projects />
        </section>
      </LazySection>

      <LazySection height="70vh">
        <section id="experience">
          <Experience />
        </section>
      </LazySection>

      <LazySection height="70vh">
        <section id="education">
          <Education />
        </section>
      </LazySection>

      <LazySection height="70vh">
        <section id="contact">
          <Contact />
        </section>
      </LazySection>

      <Footer />
    </>
  );
}
export default App;
