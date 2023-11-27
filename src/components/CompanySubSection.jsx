import React from 'react'
import TitledList from './TitledList'

export default function CompanySubSection({info}){
    // console.log(info.company)
    return (
        <div className='section sub-section'>
            <div className='company-grid'>
                <span>{`${info.designation}`}</span>
                <span>{`${info.from} - ${info.to}`}</span>
                <span>{`${info.company}`}</span>
                <span>{`${info.duration}`}</span>
            </div>
            <TitledList skills={info.techSkills} title={`Technical Skills`}/>
            <TitledList skills={info.softSkills} title={`Soft Skills`}/>
        </div>
    )
}