"use client"
import React from 'react'

const About = () => {
  return (
    <div id="about" className="relative h-[85vh] w-full flex flex-col gap-15 justify-center items-center">
        <div className="w-7/10 flex flex-col gap-5 items-center justify-center">
            <h3 className="text-[rgb(228,0,122)] text-3xl font-bold text-center">Who am I?</h3>
            <div className="flex flex-row gap-20 items-center">
              <p className="text-white text-xl font-bold text-justify">
                My name is Guilherme Amaral Motta. I'm 23 years old and currently in my last year of
                studying Computer Science at Universidade Salvador - UNIFACS, a university located in
                Salvador, Bahia, Brazil. I specialize in Python programming and front-end web development.
                I’m fluent in both Portuguese and English, with strong written and verbal communication
                skills. In addition to software development, I have extensive knowledge of technologies 
                and experience with hardware, such as maintenance and assembly of laptops and computers.
              </p>
              <img src="foto.svg" className="w-[25%]"></img>
            </div>
        </div> 
        <div className="w-4/5 flex flex-col gap-5">
            <h3 className="text-[rgb(228,0,122)] text-3xl font-bold text-center">My Skills</h3>
            <div className="flex flex-row flex-wrap gap-10 justify-center">
              <div className="w-[15%] flex flex-col items-center gap-3">
                <div className="flex flex-row gap-2">
                  <img src="python-logo.svg" className="w-5"></img>
                  <p className="text-white text-xl font-bold">Python</p>
                </div>
                <img src="bar3.svg" className="w-full"></img>
              </div>
              <div className="w-[15%] flex flex-col items-center gap-3">
                <div className="flex flex-row gap-2">
                  <img src="html5-icon.svg" className="w-5"></img>
                  <p className="text-white text-xl font-bold">HTML</p>
                </div>
                <img src="bar3.svg" className="w-full"></img>
              </div>
              <div className="w-[15%] flex flex-col items-center gap-3">
                <div className="flex flex-row gap-2">
                  <img src="css-logo.svg" className="w-5"></img>
                  <p className="text-white text-xl font-bold">CSS</p>
                </div>
                <img src="bar3.svg" className="w-full"></img>
              </div>
              <div className="w-[15%] flex flex-col items-center gap-3">
                <div className="flex flex-row gap-2">
                  <img src="git-logo.svg" className="w-5"></img>
                  <p className="text-white text-xl font-bold">Git</p>
                </div>
                <img src="bar3.svg" className="w-full"></img>
              </div>
              <div className="w-[15%] flex flex-col items-center gap-3">
                <div className="flex flex-row gap-2">
                  <img src="javascript-logo.svg" className="w-5"></img>
                  <p className="text-white text-xl font-bold">JavaScript</p>
                </div>
                <img src="bar2.svg" className="w-full"></img>
              </div>
              <div className="w-[15%] flex flex-col items-center gap-3">
                <div className="flex flex-row gap-2">
                  <img src="typescript-logo.svg" className="w-5"></img>
                  <p className="text-white text-xl font-bold">TypeScript</p>
                </div>
                <img src="bar2.svg" className="w-full"></img>
              </div>
              <div className="w-[15%] flex flex-col items-center gap-3">
                <div className="flex flex-row gap-2">
                  <img src="react-logo.svg" className="w-5"></img>
                  <p className="text-white text-xl font-bold">React</p>
                </div>
                <img src="bar2.svg" className="w-full"></img>
              </div>
              <div className="w-[15%] flex flex-col items-center gap-3">
                <div className="flex flex-row gap-2">
                  <img src="nextjs-icon.svg" className="w-5"></img>
                  <p className="text-white text-xl font-bold">Next.js</p>
                </div>
                <img src="bar2.svg" className="w-full"></img>
              </div>
              <div className="w-[15%] flex flex-col items-center gap-3">
                <div className="flex flex-row gap-2">
                  <img src="nodejs-icon.svg" className="w-5"></img>
                  <p className="text-white text-xl font-bold">Node.js</p>
                </div>
                <img src="bar1.svg" className="w-full"></img>
              </div>
              <div className="w-[15%] flex flex-col items-center gap-3">
                <div className="flex flex-row gap-2">
                  <img src="mysql-icon.svg" className="w-5"></img>
                  <p className="text-white text-xl font-bold">MySQL</p>
                </div>
                <img src="bar1.svg" className="w-full"></img>
              </div>
            </div>
        </div> 
    </div>
  )
}

export default About