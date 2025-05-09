"use client"
import React, { useState } from 'react'
import EducationCard from './ui/educationCard'
import CertificationCard from './ui/certificationCard'

const Education = () => {
  const [showAllCerts, setShowAllCerts] = useState(false)
  {/* certifications cards info */}
  const certifications = [
    {
      title: "Advanced English C1",
      organization: "Duolingo English Test",
      year: "2024",
      logo: "duolingo-icon.svg",
      link: "https://certs.duolingo.com/3bgm8zx0rii3sc24"
    },
    {
      title: "Programação com JavaScript",
      organization: "Alura",
      year: "2024",
      logo: "alura-logo.svg",
      link: "https://www.alura.com.br"
    },
    {
      title: "Git e GitHub",
      organization: "Alura",
      year: "2024",
      logo: "alura-logo.svg",
      link: "https://www.alura.com.br"
    },
    {
      title: "Microsoft Office 365",
      organization: "UNOVA",
      year: "2025",
      logo: "office365-icon.svg",
      link: "https://www.unovacursos.com.br/certificados/23197383882248122202502"
    }
  ]

  const visibleCerts = showAllCerts ? certifications : certifications.slice(0, 2)

  return (
    <div id="education" className="relative flex flex-col justify-center w-[70%] mx-auto gap-10 mb-30">
      {/* education section */}
      <div className="flex flex-col gap-5 w-full">

        <h3 className="text-center text-[rgb(228,0,122)] text-5xl font-bold mt-20">Education</h3>
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

      {/* certifications section */}
      <div className="flex flex-col gap-5 mb-5 w-full">
        {/* section title and button */}
        <div className="flex flex-row justify-center items-center gap-5">
          <h3 className="text-[rgb(228,0,122)] text-center text-5xl font-bold">Certifications</h3>
          <button
            onClick={() => setShowAllCerts(prev => !prev)}
            className="flex items-center justify-center 
            border-[rgb(228,0,122)] text-[rgb(228,0,122)] hover:bg-[rgb(228,0,122)] hover:text-white
            w-10 h-10 rounded-full border-4 cursor-pointer font-bold text-xl transition"
          >
            {showAllCerts ? 'X' : '+'}
          </button>
        </div>

        {/* section cards */}
        <div className="flex flex-col items-center w-full gap-5">
          {visibleCerts.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              organization={cert.organization}
              year={cert.year}
              logo={cert.logo}
              link={cert.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
