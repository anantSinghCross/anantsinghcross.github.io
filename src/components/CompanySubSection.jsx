import React from 'react'
import TitledList from './TitledList'

export default function CompanySubSection({info}){
    // console.log(info.company)
    return (
        <div>
            {`Designation : ${info.designation}`}
            <br/>
            {`Company : ${info.company}`}
            <br/>
            {`From : ${info.from}`}
            <br/>
            {`To : ${info.to}`}
            <TitledList skills={info.techSkills}/>
            <TitledList skills={info.softSkills}/>
        </div>
    )
}