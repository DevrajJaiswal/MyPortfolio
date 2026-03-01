import React from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Project from '../components/sections/Projects'
import Contact from '../components/sections/Contact'
import Skills from '../components/sections/Skills'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  )
}

export default Home