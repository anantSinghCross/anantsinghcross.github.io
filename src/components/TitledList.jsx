import React from 'react'

export default function TitledList({skills, title}){
    const list = skills.map((item, i) => <li key={i}>{item}</li>)
    return (
        <div>
            <h4>{title}</h4>
            <ul>{list}</ul>
        </div>
    )
}