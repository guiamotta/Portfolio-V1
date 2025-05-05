import React from 'react'
import { Vortex } from './ui/vortex'
import { TypewriterEffect } from './ui/typewriter-effect';
import BordersButton from './ui/bordersButton';

const Hero = () => {
    const description = [
        {text: "Front-End", className: "text-[rgb(228,0,122)]"},
        {text: "developer", className: "text-white"},
        {text: "from", className: "text-white"},
        {text: "Salvador", className: "text-[rgb(228,0,122)]"},
    ]
  return (
    <div id="home" className="relative w-full h-[85vh] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0">
            <Vortex particleCount={100} rangeY={350}>
            </Vortex>
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center gap-7 p-4 h-full justify-center">
            <div className="flex flex-col gap-5">
                <h1 className="text-white text-6xl font-bold">Guilherme A. Motta</h1>
                <TypewriterEffect words={description} cursorClassName="bg-[rgb(228,0,122)] w-[5px]"></TypewriterEffect>
            </div>
            <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <a href="https://www.linkedin.com/in/guilherme-amaral-motta/">
                    <BordersButton title="GitHub"/>
                </a>
                <a href="#about">
                    <BordersButton title="Currículo"/>
                </a>
                <a href="https://github.com/guiamotta">
                    <BordersButton title="LinkedIn"/>
                </a>
            </div>
            
        </div>

        

    </div>


  )
}

export default Hero