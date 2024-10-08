import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

const Project = ({title, desc, url, git, techStack}) => {
  return (
    <div className='group p-5 border border-b-4 border-neutral-300 hover:bg-neutral-100 hover:border-neutral-500 transition-all'>
      <div className='flex justify-between items-center mb-5'>
        <h2 className='flex items-center gap-3 text-xl'>
          {title}
        </h2>
        <div className='flex text-neutral-400 gap-2'>
          <a className='border border-b-4 border-neutral-200 p-2 bg-white hover:bg-neutral-300 hover:text-neutral-900 hover:border-neutral-900 transition-all' href={git} target="_blank"><FiGithub/></a>
          <a className='border border-b-4 border-neutral-200 p-2 bg-white hover:bg-neutral-300 hover:text-neutral-900 hover:border-neutral-900 transition-all' href={url} target="_blank"><MdArrowOutward/></a>
        </div>
      </div>
      <p className='text-neutral-500'>
        {desc}
      </p>
      <div className='flex gap-4 mt-5 flex-wrap'>
        {
          techStack && techStack.map(item => {
            return (
              <div className='border border-b-4 text-xs text-neutral-500 text-nowrap border-neutral-200 py-2 px-3 bg-white group-hover:border-neutral-400 transition-all'>
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