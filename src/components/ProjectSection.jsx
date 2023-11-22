import React from 'react'
import TitledList from './TitledList'

export default function ProjectSection({title, content}){
    const projects = content.map((project) => <TitledList title={project.projTitle} skills={project.details}/>)
    return (
        <div className='section'>
            <h3 className='gradient-text'>{title}</h3>
            {projects}
        </div>
    )
}