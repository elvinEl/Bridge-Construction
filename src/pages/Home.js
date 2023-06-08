import React from "react";
import AboutHome from "../components/about/AboutHome";
import Certifcate from "../components/certifcates/Certifcate";
import Comments from "../components/comments/Comments";
import ContactHome from "../components/contact/ContactHome";
import HeroSection from "../components/HeroSection";
import ProjectsHome from "../components/projects/ProjectsHome";
import ServicesHome from "../components/services/ServicesHome";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutHome />
      <ProjectsHome />
      <Comments />
      <ServicesHome />
      <Certifcate/>
      <ContactHome />
    </div>
  );
}

export default Home;
