import React from 'react';
import './Categories.css';

const Categories = ({ filterItems, categories }) => {
    return <div className="btn-container">
        {categories.map((category, index) => {
            return <button
                type='button'
                onClick={() => filterItems(category)}
                key={index}
                className='filter-btn'
            >
                {category}
            </button>
        })}
    </div>;
};

export default Categories;
