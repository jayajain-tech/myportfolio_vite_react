import { useRef } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Qualifications from './components/Qualifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const qualRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <>
      <NavBar
        homeRef={homeRef}
        skillsRef={skillsRef}
        qualRef={qualRef}
        projectsRef={projectsRef}
        contactsRef={contactsRef}
      />
      <main>
        <section ref={homeRef}><Home /></section>
        <section ref={skillsRef}><Skills /></section>
        <section ref={qualRef}><Qualifications /></section>
        <section ref={projectsRef}><Projects /></section>
        <section ref={contactsRef}><Contact /></section>
        <Footer />
      </main>
    </>
  );
}

export default App;
