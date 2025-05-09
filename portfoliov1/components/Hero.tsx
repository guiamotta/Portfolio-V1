import React from 'react';
import { Vortex } from './ui/vortex';
import { TypewriterEffect } from './ui/typewriter-effect';
import BordersButton from './ui/bordersButton';

const Hero = () => {
  const description = [
    { text: "Front-End", className: "text-[rgb(228,0,122)]" },
    { text: "developer", className: "text-white" },
    { text: "from", className: "text-white" },
    { text: "Salvador", className: "text-[rgb(228,0,122)]" },
  ];

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      {/* background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Vortex particleCount={100} rangeY={350} />
      </div>

      {/* main container */}
      <div className="relative flex flex-col justify-center items-center text-center h-full z-10 gap-7 p-4">
        {/* name and description */}
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-6xl font-bold">Guilherme A. Motta</h1>
          <TypewriterEffect
            words={description}
            cursorClassName="bg-[rgb(228,0,122)] w-[5px]"
          />
        </div>

        {/* buttons */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <a
            href="https://www.linkedin.com/in/guilherme-amaral-motta/"
            target="_blank"
          >
            <BordersButton title="LinkedIn" />
          </a>
          <a href="#about">
            <BordersButton title="Currículo" />
          </a>
          <a
            href="https://github.com/guiamotta"
            target="_blank"
          >
            <BordersButton title="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
