import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useRef } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Qualifications from './components/Qualifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
function App() {
  // Create refs for each Route
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const qualRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <BrowserRouter>
        <Header />
      <main>
        <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/skills" element = {<Skills />} />
        <Route path="/qualifications" element = {<Qualifications />} />
        <Route path="/projects" element = {<Projects />} />
        <Route path="/contacts" element = {<Contact />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
