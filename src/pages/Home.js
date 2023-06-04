import React from 'react'
import AboutHome from '../components/about/AboutHome'
import ContactHome from '../components/contact/ContactHome'
import HeroSection from '../components/HeroSection'
import ProjectsHome from '../components/projects/ProjectsHome'
import ProjectsOur from '../components/projects/ProjectsOur'
import ServicesHome from '../components/services/ServicesHome'

function Home() {
  return (
    <div>
        <HeroSection/>
        <AboutHome/>
        <ProjectsHome/>
        <ProjectsOur/>
        <ServicesHome/>
        <ContactHome/>
    </div>
  )
}

export default Home