import React from 'react'
import Project from './Project';
import projectsObject from "../projects-data";

const Projects = () => {
  return (
    <div className="text-black m-5 mb-10 mt-20 p-5 bg-white">
      <h1 className='text-black text-2xl font-semibold mb-5'>
        PROJECTS
      </h1>
      <div className='flex flex-col gap-5'>
        {
          projectsObject?.map(project => {
            return <Project title={project.title} desc={project.desc} url={project.url} git={project.git} />
          })
        }
      </div>
    </div>
  )
}

export default Projects