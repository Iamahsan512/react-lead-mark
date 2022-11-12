import './Hero.css';

import React from 'react'

const Hero = () => {
    return (
        <section className='hero' id='hero'>
                <h5>LeadMark Landing Page</h5>
                <h1>We Are Creative</h1>
                <div className="mouse_icon"></div>
                <svg className='shape' viewBox="0 0 1500 200">
                    <path fill='#fff' d="m 0,240 h 1500.4828 v -71.92164 c 0,0 -286.2763,-81.79324 -743.19024,-81.79324 C 300.37862,86.28512 0,168.07836 0,168.07836 Z" />
                </svg>

            
        
        </section>
    )
}

export default Hero;