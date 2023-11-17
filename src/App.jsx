import React from 'react'
import './App.css'
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Resume from './components/resume/Resume';
// import Blog from './components/blog/Blog';

function App() {
  
  return (
    <main className='main'>
      <Home />
      <Projects />
      <Skills />
      <Resume />
    </main>
  )
}

export default App
