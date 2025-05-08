"use client"
import React from 'react'

const SkillBar = ({ percentage }: { percentage: number }) => (
  <div className="w-full h-5 bg-indigo-500/50 rounded-full mt-2">
    <div
      className="h-full bg-[rgb(228,0,122)] rounded-full"
      style={{ width: `${percentage}%` }}
    ></div>
  </div>
)

const About = () => {
  return (
    <div id="about" className="relative w-full flex flex-col gap-15 justify-center items-center">
      <div className="w-[70%] flex flex-col gap-5 items-center justify-center">
        <h3 className="text-[rgb(228,0,122)] text-5xl font-bold text-center mt-30">Who I am</h3>
        <div className="flex flex-row gap-20 items-center">
          <div className="flex flex-col gap-5">
            <p className="text-white text-xl font-bold text-justify">
              My name is Guilherme Amaral Motta. I'm 23 years old and currently in my last year of
              studying Computer Science at Salvador University, a university located in Brazil.
            </p>
            <p className="text-white text-xl font-bold text-justify">
              I’m fluent in both Portuguese and English, having strong written and verbal communication
              skills, and specialize in Python programming and front-end web development.
            </p>
            <p className="text-white text-xl font-bold text-justify">
              In addition to software development, I have extensive knowledge of technologies 
              and experience with hardware, such as maintenance and assembly of laptops and computers.
            </p>
          </div>
          <img src="foto.svg" className="w-[25%]" />
        </div>
      </div> 

      <div className="w-[70%] flex flex-col gap-10">
        <h3 className="text-[rgb(228,0,122)] text-3xl font-bold text-center">My Skills</h3>
        <div className="flex flex-row flex-wrap gap-10 justify-between">
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
            { name: "MySQL", icon: "mysql-icon.svg", level: 40 },
          ].map((skill, index) => (
            <div key={index} className="w-[15%] flex flex-col items-center">
              <div className="flex flex-row gap-2 items-center">
                <img src={skill.icon} className="w-5" />
                <p className="text-white text-xl font-bold">{skill.name}</p>
              </div>
              <SkillBar percentage={skill.level} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
