import React from 'react'
import './App.css'
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  
  return (
    <main className='main'>
      <Home />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
