import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Timeline from './components/Timeline.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <div className="scanlines" />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}
