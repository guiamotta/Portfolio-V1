import React from 'react'

const BordersButton = (
    {title, handleClick}: 
    {title: string; handleClick?:() => void;}
) => {
  return (
    <button className="p-[3px] w-full relative cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 font-bold text-white hover:bg-transparent">
            {title}
        </div>
    </button>  
    )
}

export default BordersButton