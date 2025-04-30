import React from 'react'
import { Vortex } from './ui/vortex'
import { TypewriterEffect } from './ui/typewriter-effect';
import BordersButton from './ui/bordersButton';

const Hero = () => {
    const description = [
        {text: "Desenvolvedor", className: "text-white"},
        {text: "Front-End", className: "text-[rgb(228,0,122)]"},
        {text: "situado", className: "text-white"},
        {text: "em", className: "text-white"},
        {text: "Salvador",className: "text-[rgb(228,0,122)]"},
    ]
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0">
            <Vortex particleCount={100} rangeY={350}>
            </Vortex>
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center gap-4 p-4 h-full justify-center">
            <h1 className="text-white text-6xl font-bold">Guilherme A. Motta</h1>
            <TypewriterEffect words={description} cursorClassName="bg-[rgb(228,0,122)] w-[5px]"></TypewriterEffect>
            <a href="#about">
                <BordersButton title="Currículo"/>
            </a>
        </div>

        

    </div>


  )
}

export default Hero