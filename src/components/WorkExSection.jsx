import React from 'react'
import CompanySubSection from './CompanySubSection'

export default function WorkExSection({title, content/*array*/}){
    const companies = content.map((each) => <CompanySubSection info={each}/>)
    return (
        <div className='section'>
            <h3 className='gradient-text'>{title}</h3>
            {companies}
        </div>
    )
}