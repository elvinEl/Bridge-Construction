import React from 'react'
import AboutHome from '../components/about/AboutHome'
import HeroSection from '../components/HeroSection'
import ProjectsHome from '../components/projects/ProjectsHome'

function Home() {
  return (
    <div>
        <HeroSection/>
        <AboutHome/>
        <ProjectsHome/>
    </div>
  )
}

export default Home