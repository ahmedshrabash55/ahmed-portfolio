import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Expertise from './components/Expertise'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import USP from './components/USP'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Expertise />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <USP />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
