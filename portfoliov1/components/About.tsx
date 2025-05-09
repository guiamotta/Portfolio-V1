import React from 'react'

{/* skill bars */}
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
    <div id="about" className="relative flex flex-col gap-15 justify-center items-center w-full mb-30">

      {/* main container */}
      <div className="flex flex-col items-center justify-center w-[70%] gap-5">

        {/* who I am section */}
        <h3 className="text-center text-[rgb(228,0,122)] text-5xl font-bold mt-30">Who I am</h3>
        <div className="flex flex-row items-center gap-20">

          {/* text */}
          <div className="flex flex-col gap-5">
            <p className="text-justify text-white text-xl font-bold">
              My name is Guilherme Amaral Motta. I'm 23 years old and currently in my last year of
              studying Computer Science at Salvador University, a university located in Brazil.
            </p>
            <p className="text-justify text-white text-xl font-bold">
              I’m fluent in both Portuguese and English, having strong written and verbal communication
              skills, and specialize in Python programming and front-end web development.
            </p>
            <p className="text-justify text-white text-xl font-bold">
              In addition to software development, I have extensive knowledge of technologies 
              and experience with hardware, such as maintenance and assembly of laptops and computers.
            </p>
          </div>

          {/* image */}
          <img src="foto.svg" className="w-[25%]" />
        </div>
      </div> 

      {/* skills section */}
      <div className="flex flex-col w-[70%] gap-10">
        <h3 className="text-center text-[rgb(228,0,122)] text-3xl font-bold">My Skills</h3>

        {/* map bars */}
        <div className="flex flex-wrap justify-center gap-10">
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
            <div key={index} className="w-50 flex flex-col items-center">
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
