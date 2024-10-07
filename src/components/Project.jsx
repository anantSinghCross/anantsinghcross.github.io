import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

const Project = ({title, desc, url, git}) => {
  return (
    <div className=' p-5 border border-neutral-300 hover:bg-neutral-50 hover:border-neutral-400 transition-all'>
      <div className='flex justify-between items-center mb-5'>
        <h2 className='flex items-center gap-3 text-xl'>
          {title}
        </h2>
        <div className='flex text-neutral-400 gap-2'>
          <a className='border border-neutral-200 p-2 hover:bg-neutral-200 hover:text-neutral-500 hover:border-neutral-500 transition-all' href={git} target="_blank"><FiGithub/></a>
          <a className='border border-neutral-200 p-2 hover:bg-neutral-200 hover:text-neutral-500 hover:border-neutral-500 transition-all' href={url} target="_blank"><MdArrowOutward/></a>
        </div>
      </div>
      <p className='text-neutral-500'>
        {desc}
      </p>
    </div>
  )
}

export default Project