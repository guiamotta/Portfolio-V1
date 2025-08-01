import React from 'react'
import EducationCard from './ui/educationCard'

{/* skill bars */}
const SkillBar = ({ percentage }: { percentage: number }) => (
  <div className="w-full h-5 bg-indigo-500/50 rounded-full mb-5">
    <div
      className="h-full bg-[rgb(228,0,122)] rounded-full"
      style={{ width: `${percentage}%` }}
    ></div>
  </div>
)

const About = () => {
  return (
    <div id="about" className="relative flex flex-col gap-15 justify-center items-center w-full mb-10">

      {/* main container */}
      <div className="flex flex-col items-center justify-center w-[70%] gap-5">

        {/* who I am section */}
        <h3 className="text-center text-[rgb(228,0,122)] text-5xl font-bold mt-30">Who I am</h3>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-50">

          {/* text */}
          <div className="flex flex-col gap-5">
            <p className="text-justify text-white text-sm sm:text-xl font-bold">
              I am Guilherme Amaral Motta, a 24-year-old Computer Science student in my final year at 
              Salvador University, Brazil, with experience as a Front-End Web Developer using React, 
              Next.js and Node.js. I worked at InfoJr UFBA developing web applications and as a Teaching
              Assistant at the Federal University of Bahia, where I taught programming logic with Python 
              to engineering students. I also have solid experience in IT support, including hardware and 
              laptop maintenance, computer assembly and troubleshooting across Windows, Linux, macOS, 
              Android, and iOS.
            </p>
            <p className="text-justify text-white text-sm sm:text-xl font-bold">
              I strive to cultivate an efficient, impactful, and innovative approach to my work, always 
              seeking solutions that combine technical quality with creativity. I value ethics and 
              responsibility as essential principles in every project I take part in, ensuring that my 
              contributions not only deliver results but also generate a positive impact.
            </p>
            <p className="text-justify text-white text-sm sm:text-xl font-bold">
              I am highly motivated to continue learning and expanding my technical expertise, aiming to 
              strengthen my career and establish myself in the technology field. I seek opportunities to 
              collaborate with talented teams, contribute to meaningful projects, and grow both professionally 
              and personally through shared knowledge and challenges.
            </p>
          </div>

          {/* image */}
          <img src="foto.svg" className="w-70" />
        </div>
      </div> 

      {/* skills section */}
      <div className="flex flex-col w-[70%] gap-10">
        {/* map bars */}
        <h3 className="text-center text-[rgb(228,0,122)] text-4xl font-bold">Skills</h3>

        <div className="flex flex-wrap justify-between">
          {[
            { name: "Python", icon: "python-logo.svg", level: 85 },
            { name: "HTML", icon: "html5-icon.svg", level: 85 },
            { name: "CSS", icon: "css-logo.svg", level: 85 },
            { name: "Git", icon: "git-logo.svg", level: 85 },
            { name: "JavaScript", icon: "javascript-logo.svg", level: 67 },
            { name: "TypeScript", icon: "typescript-logo.svg", level: 67 },
            { name: "React", icon: "react-logo.svg", level: 67 },
            { name: "Next.js", icon: "nextjs-icon.svg", level: 67 },
            { name: "Node.js", icon: "nodejs-icon.svg", level: 40 },
            { name: "MySQL", icon: "mysql-icon.svg", level: 40 }
          ].map((skill, index) => (
            <div key={index} className="w-[45%] md:w-[18%] flex flex-col items-center">
              <div className="flex flex-row gap-2 items-center">
                <img src={skill.icon} className="w-5" />
                <p className="text-white text-sm sm:text-xl font-bold">{skill.name}</p>
              </div>
              <SkillBar percentage={skill.level} />
            </div>
          ))}
        </div>

      </div>
      <div id="education" className="relative flex flex-col justify-center w-[70%] mx-auto gap-10 mb-10">
      {/* education section */}
      <div className="flex flex-col gap-5 w-full">

        <h3 className="text-center text-[rgb(228,0,122)] text-4xl font-bold">Education</h3>
        <div className="flex flex-col w-full items-center gap-5">

        {/* section cards */}
        <EducationCard
          university="Salvador University"
          degree="Bachelors in Computer Science"
          period="2025.1 - 2025.2"
          logo="unifacs-logo.png"
          link="https://www.unifacs.br"
        />
        <EducationCard
          university="Federal University of Bahia"
          degree="Bachelors in Computer Science"
          period="2021.2 - 2025.1"
          logo="ufba-logo.svg"
          link="https://www.ufba.br"
        />

        </div>
      </div>
    </div>
    </div>
  )
}

export default About
