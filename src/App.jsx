import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Education from './components/education/Education'
import Projects from './components/projects/Projects'
import WorkExp from './components/workExp/WorkExp'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'

const App = () => {
  return (
    <>
    <div>
      <div className="container"><Header/></div>
      
      <Nav/>
      <WorkExp/>
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>
      <Footer/>
      </div>
    </>
  )
}

export default App
