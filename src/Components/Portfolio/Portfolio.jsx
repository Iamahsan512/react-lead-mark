import React, { useState } from 'react';
import './Portfolio.css';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const Portfolio = () => {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);
    console.log(setCategories);


    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    }
    return <section id='portfolio'>
            <div className="heading">
                <h2>Our Portfolio</h2>
                <p>New stunning projects for our amazing clients</p>
            </div>
            <div className="container">
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </div>
        </section>
}

export default Portfolio;
