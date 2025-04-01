import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

const Project = ({title, desc, url, git, techStack}) => {
  return (
    <div className='group p-5 border border-b-4 border-neutral-300 hover:bg-neutral-100 hover:border-neutral-500 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1'>
      <div className='flex justify-between items-center mb-5'>
        <h2 className='flex items-center gap-3 text-xl'>
          {title}
        </h2>
        <div className='flex text-neutral-400 gap-2'>
          <a className='border border-b-4 border-neutral-200 p-2 bg-white hover:bg-neutral-300 hover:text-neutral-900 hover:border-neutral-900 transition-all duration-300 transform hover:scale-110' href={git} target="_blank"><FiGithub className='transform transition-transform duration-300 hover:rotate-12'/></a>
          <a className='border border-b-4 border-neutral-200 p-2 bg-white hover:bg-neutral-300 hover:text-neutral-900 hover:border-neutral-900 transition-all duration-300 transform hover:scale-110' href={url} target="_blank"><MdArrowOutward className='transform transition-transform duration-300 hover:rotate-12'/></a>
        </div>
      </div>
      <p className='text-neutral-500'>
        {desc}
      </p>
      <div className='flex gap-4 mt-5 flex-wrap'>
        {
          techStack && techStack.map((item, index) => {
            return (
              <div key={index} className='border border-b-4 text-xs text-neutral-500 text-nowrap border-neutral-200 py-2 px-3 bg-white group-hover:border-neutral-400 transition-all duration-300 hover:bg-neutral-200 transform hover:scale-105' style={{ transitionDelay: `${index * 50}ms` }}>
                {item}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Project