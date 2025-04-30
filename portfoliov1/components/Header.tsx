"use client"
import React, { useState } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="fixed top-0 left-0 w-full px-6 py-4 bg-black text-white font-bold z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-white text-3xl font-bold">guiamotta</a>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="#home">Home</a>
          <a href="#services">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Ícone do menu mobile */}
        <div className="relative md:hidden">
          <div
            className="flex flex-col space-y-1 cursor-pointer"
            onClick={toggleMenu}
          >
            <div className={`w-6 h-0.5 transition-colors ${isMobileMenuOpen ? 'bg-[rgb(228,0,122)]' : 'bg-white'}`}></div>
            <div className={`w-6 h-0.5 transition-colors ${isMobileMenuOpen ? 'bg-[rgb(228,0,122)]' : 'bg-white'}`}></div>
            <div className={`w-6 h-0.5 transition-colors ${isMobileMenuOpen ? 'bg-[rgb(228,0,122)]' : 'bg-white'}`}></div>
          </div>

          {/* Menu mobile posicionado abaixo do ícone */}
          {isMobileMenuOpen && (
            <nav className="absolute right-0 mt-2 bg-transparent text-white shadow-lg z-50">
              <ul className="flex flex-col items-end space-y-2 p-0 w-40 mt-2">
                <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
                <li><a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a></li>
                <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
