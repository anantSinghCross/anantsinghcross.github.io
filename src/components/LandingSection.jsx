import React from 'react'
import bgImage from '../../src/assets/Vector.png';

export default function LandingSection(){
    console.log(bgImage)
    // using styles just for the background image
    const styles = {
        backgroundImage: `url('${bgImage}')`,
    }
    return (
        <div className='landing' style={styles}>
            <div>
                <h2>Hi, I'm Anant</h2>
                <hr className='landing-hr-line'/>
                <p>A Software Developer</p>
            </div>
        </div>
    )
}