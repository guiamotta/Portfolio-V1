import React from 'react'

type ProjectCardProps = {
  name: string
  description: string
  year: string
  image: string
  link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({name, description, year, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full cursor-pointer"
    >
      <div className="flex flex-col md:flex-row items-center justify-between rounded-2xl bg-[rgba(87,0,228,0.7)] text-black hover:bg-[rgb(87,0,228)] text-center w-full overflow-hidden h-64">
        <img src="icon.svg" className="w-10 h-10 m-5 hidden md:block" alt="Graduation icon" />
        <div className="flex-1 px-4 text-center md:text-left">
          <h4 className="text-5xl font-bold mt-5 md:mt-0">{name}</h4>
          <p className="font-bold">{description}</p>
          <p>{year}</p>
        </div>
        <div className="w-full md:w-[50%] h-full overflow-hidden">
          <img src={image} className="w-full h-full object-cover p-2 rounded-2xl" alt={`${name} logo`} />
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
