"use client"
import React, { useState } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="fixed bg-black text-white top-0 left-0 w-full px-6 py-4 font-bold z-50">
      <div className="flex justify-between items-center">
        {/* logo */}
        <a href="#home" className="text-[rgb(228,0,122)] text-3xl font-bold">guiamotta</a>

        {/* sections */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-[rgb(228,0,122)] transition-colors">Home</a>
          <a href="#about" className="hover:text-[rgb(228,0,122)] transition-colors">About</a>
          <a href="#education" className="hover:text-[rgb(228,0,122)] transition-colors">Education</a>
          <a href="#projects" className="hover:text-[rgb(228,0,122)] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[rgb(228,0,122)] transition-colors">Contact</a>
        </div>

        {/* burger icon */}
        <div className="relative md:hidden">
          <div className="flex flex-col space-y-1 cursor-pointer group"onClick={toggleMenu}>
            <div className={`w-6 h-0.5 transition-colors ${isMobileMenuOpen ? 'bg-[rgb(228,0,122)]' :
              'group-hover:bg-[rgb(228,0,122)] bg-white'}`}></div>
            <div className={`w-6 h-0.5 transition-colors ${isMobileMenuOpen ? 'bg-[rgb(228,0,122)]' : 
              'group-hover:bg-[rgb(228,0,122)] bg-white'}`}></div>
            <div className={`w-6 h-0.5 transition-colors ${isMobileMenuOpen ? 'bg-[rgb(228,0,122)]' : 
              'group-hover:bg-[rgb(228,0,122)] bg-white'}`}></div>
          </div>

          {isMobileMenuOpen && (
            <nav className="absolute bg-black/50 text-white right-0 mt-2 shadow-lg z-50">
              <ul className="flex flex-col items-end space-y-2 p-0 w-40 mt-2">
                <li><a href="#home" className="hover:text-[rgb(228,0,122)] transition-colors" 
                  onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
                <li><a href="#about" className="hover:text-[rgb(228,0,122)] transition-colors" 
                  onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
                <li><a href="#portfolio" className="hover:text-[rgb(228,0,122)] transition-colors" 
                  onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
                <li><a href="#contact" className="hover:text-[rgb(228,0,122)] transition-colors" 
                  onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
