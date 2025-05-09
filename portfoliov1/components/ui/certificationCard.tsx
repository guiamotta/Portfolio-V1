import React from 'react'

type certificationCardProps = {
  title: string
  organization: string
  year: string
  logo: string
  link: string
}

const certificationCard: React.FC<certificationCardProps> = ({ title, organization, year, logo, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full cursor-pointer"
    >
      <div className="flex flex-row items-center justify-between rounded-2xl bg-indigo-500/70 text-black hover:bg-indigo-500 text-center w-full overflow-hidden h-32">
        <img src="certification-icon.svg" className="w-10 h-10 m-5" alt="Certification icon" />
        <div className="flex-1 px-4 text-left">
          <h4 className="text-xl font-bold">{title}</h4>
          <p>{organization}</p>
          <p>{year}</p>
        </div>
        <div className="w-[50%] h-full overflow-hidden">
          <img src={logo} className="w-full h-full object-cover" alt={`${organization} logo`} />
        </div>
      </div>
    </a>
  )
}

export default certificationCard
