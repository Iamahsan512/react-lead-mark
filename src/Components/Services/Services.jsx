import './Services.css';

import React from 'react';
import card from '../Services/data';

const Services = () => {
    return (
        <section id='services' className='services'>
            <div className="container">
                <div className="heading">
                    <h2>our services</h2>
                    <p>What services do we offer !</p>
                </div>
                <div className="services-row">
                    {card.map((data) => {
                        const { id, no, title, text } = data;
                        return <div className="services-card" key={id}>
                            <span>0{no}</span>
                            <h4>{title}</h4>
                            <p>{text}</p>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services;