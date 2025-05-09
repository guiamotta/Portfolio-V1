import React from 'react'

type projectCardProps = {
  title: string
  description: string
  image: string
  link: string
}

const projectCard: React.FC<projectCardProps> = ({ title, description, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer"
    >
      <div className="flex flex-col items-center justify-between text-center
      bg-indigo-500/70 text-black hover:bg-indigo-500
      rounded-2xl w-75 h-75 overflow-hidden">
        <div className="flex flex-col justify-center items-center flex-1 px-4">
          <h4 className="text-2xl font-bold mt-3">{title}</h4>
          <p>{description}</p>
        </div>
        <div className="w-[90%] rounded-2xl overflow-hidden m-5">
          <img src={image} className="w-full h-full object-cover" alt={`${title}`} />
        </div>
      </div>
    </a>
  )
}

export default projectCard
