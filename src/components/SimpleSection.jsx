import React from 'react'

/*
    SimpleSection will have the title and a simple paragraph wrapped in a div
*/

export default function SimpleSection({ title = `Sample Title`, content = `Sample paragraph content goes here.` }){
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}