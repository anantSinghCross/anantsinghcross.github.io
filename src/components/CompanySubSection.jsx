import React from 'react'
import TitledList from './TitledList'

export default function CompanySubSection({info}){
    // console.log(info.company)
    return (
        <div className='section'>
            {`Designation : ${info.designation}`}
            <br/>
            {`Company : ${info.company}`}
            <br/>
            {`From : ${info.from}`}
            <br/>
            {`To : ${info.to}`}
            <TitledList skills={info.techSkills} title={`Technical Skills`}/>
            <TitledList skills={info.softSkills} title={`Soft Skills`}/>
        </div>
    )
}