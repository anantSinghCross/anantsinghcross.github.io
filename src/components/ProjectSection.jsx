import React from 'react'
import TitledList from './TitledList'

export default function ProjectSection({title, content}){
    const projects = content.map((project) => <TitledList title={project.projTitle} skills={project.details}/>)
    return (
        <div>
            <h3>{title}</h3>
            {projects}
        </div>
    )
}