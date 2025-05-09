import React from 'react'

type EducationCardProps = {
  university: string
  degree: string
  period: string
  logo: string
  link: string
}

const EducationCard: React.FC<EducationCardProps> = ({ university, degree, period, logo, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full cursor-pointer"
    >
      <div className="flex flex-row items-center justify-between rounded-2xl bg-[rgba(228,0,122,0.7)] text-black hover:bg-[rgb(228,0,122)] text-center w-full overflow-hidden h-32">
        <img src="graduation-icon.svg" className="w-10 h-10 m-5" alt="Graduation icon" />
        <div className="flex-1 px-4 text-left">
          <h4 className="text-xl font-bold">{university}</h4>
          <p>{degree}</p>
          <p>{period}</p>
        </div>
        <div className="w-[50%] h-full overflow-hidden">
          <img src={logo} className="w-full h-full object-cover" alt={`${university} logo`} />
        </div>
      </div>
    </a>
  )
}

export default EducationCard
