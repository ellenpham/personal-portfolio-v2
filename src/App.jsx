import React from 'react'
import './App.css'
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  
  return (
    <main className='main'>
      <Home />
      <Projects />
      <Skills />
    </main>
  )
}

export default App
