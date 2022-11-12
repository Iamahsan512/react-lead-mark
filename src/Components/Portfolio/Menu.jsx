import React from 'react';
import './Portfolio.css';

const Menu = ({ items }) => {
    return <div className="menu-row">
        {items.map((item) => {
            const { id, title, img, desc } = item;
            return <article key={id} className='menu-item'>
                <img src={img} alt={title} className='photo' />
                <div className="item-info">
                    <h4>{title}</h4>
                    <p className="item-text">{desc}</p>
                </div>
            </article>
        })}
    </div>
};

export default Menu;
