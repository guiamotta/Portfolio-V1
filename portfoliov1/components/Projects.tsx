import React from 'react'
import ProjectCard from './ui/projectCard'

const Projects = () => {
  return (
    <div id="projects" className="relative flex flex-col justify-center w-[70%] mx-auto gap-10 mb-30">
      {/* projects section */}
      <div className="flex flex-col gap-5 w-full">

        <h3 className="text-center text-[rgb(228,0,122)] text-5xl font-bold mt-20">Projects</h3>
        <div className="flex flex-wrap justify-center gap-10">
          {/* project cards */}
          <ProjectCard
          name="Portfolio"
          description="Website created with React|Next.js|Tailwind"
          year="2025"
          image="project1.png"
          link="https://github.com/guiamotta/portfoliov1/"
          />
          <ProjectCard
          name="Portfolio"
          description="Website created with React|Next.js|Tailwind"
          year="2025"
          image="project1.png"
          link="https://github.com/guiamotta/portfoliov1/"
          />
          <ProjectCard
          name="Portfolio"
          description="Website created with React|Next.js|Tailwind"
          year="2025"
          image="project1.png"
          link="https://github.com/guiamotta/portfoliov1/"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects