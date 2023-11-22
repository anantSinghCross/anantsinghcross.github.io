import React from 'react'

/*
    SimpleSection will have the title and a simple paragraph wrapped in a div
*/

export default function SimpleSection({ title = `Sample Title`, content = `Sample paragraph content goes here.` }){
    return (
        <div className='section'>
            <h3 className='gradient-text'>{title}</h3>
            <p>{content}</p>
        </div>
    )
}