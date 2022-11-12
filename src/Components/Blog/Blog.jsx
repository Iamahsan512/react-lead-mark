import './Blog.css';
import React from 'react';
import data from '../Blog/data';

const Blog = () => {
    return (
        <section id='blog'>
            <div className="container">
                <div className="heading">
                    <h2>Latest Articles</h2>
                    <p>Architects provident destruct venite libero</p>
                </div>
                <div className="row">
                    {
                        data.map((item) => {
                            const { id, imgSrc, h4, text, span } = item;
                            return <article className='blog_card' key={id}>
                                <div className="card_img">
                                    <img src={imgSrc} alt={h4} />
                                </div>
                                <div className="card_body">
                                    <h4>{h4}</h4>
                                    <p>{text}</p>
                                    <span>{span}</span>
                                </div>
                            </article>

                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Blog;