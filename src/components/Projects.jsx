import React from 'react'
import Project from './Project';
import projectsObject from "../projects-data";

const Projects = () => {
  return (
    <div className="flex justify-center w-full max-w-3xl">
      <div className="text-black p-10 bg-white">
        <h1 className='text-black text-2xl mb-7'>
          PROJECTS
        </h1>
        <div className='flex flex-col gap-10'>
          {
            projectsObject?.map(project => {
              return <Project title={project.title} desc={project.desc} url={project.url} git={project.git} techStack={project.techStack} />
            })
          }
          <div className='self-end'>
            ...more on <a className='border-b-2 border-neutral-200 hover:border-neutral-400 transition-all' href="https://github.com/anantSinghCross" target='_blank'>Github</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects