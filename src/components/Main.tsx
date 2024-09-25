import Skills from "@/components/Skills";
import { DATA } from "@/data/resume";
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Education from "./Education";
import Projects from "./Projects";
import Hackathons from "./Hackathons";
import Contact from "./Contact";

const Main = () => {
  const displayWork = DATA["display-work"] && DATA.work.length > 0;
  const displayEducation = DATA["display-education"] && DATA.education.length > 0;
  const displayProjects = DATA["display-projects"] && DATA.projects.length > 0;
  const displayHackathons = DATA["display-hackathons"] && DATA.hackathons.length > 0;
  return (
    <main className=" flex flex-col min-h-[100dvh] max-w-2xl mt-10 space-y-10">
      <Hero/>
      
      <About/>

      { displayWork && <Work/> }

      { displayEducation && <Education/> }

        <Skills/>

      { displayProjects && <Projects/> }

      { displayHackathons && <Hackathons/> }

      <Contact/>
    </main>
  )
}

export default Main
