import './Reviews.css';
import React from 'react';
import reviews from './data';

const Reviews = () => {
    return (
        <section id='reviews'>
            <div className="container">
            <div className="heading">
                    <h2>Testimonials</h2>
                    <p>What Our Clients Says</p>
            </div>
                <div className="row">
                    {
                        reviews.map(review => {
                            const { id, img, name, job, text } = review;
                            return <article className='testimonials' key={id}>
                            <div className="card_head">
                                <img src={img} alt={name} className='fluid_img' />
                                <div className="person_info">
                                    <h5>{name}</h5>
                                    <p>{job}</p>
                                </div>
                            </div>
                                <p>{text}</p>
                            </article>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Reviews