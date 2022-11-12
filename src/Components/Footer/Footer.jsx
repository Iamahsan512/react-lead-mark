import './Footer.css';
import React from 'react';
import data from './data';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className='footer' id='contact'>
            <div className="container">
                <div className="row">
                    <div className="col-left">
                        {data.map(d => {
                            const { id, title, text } = d;
                            return <div className="details" key={id}>
                                <h4>{title}</h4>
                                <p>{text}</p>
                            </div>
                        })}
                    </div>
                    <div className="col-right">
                        <h4>Drop Us A Line</h4>
                        <form className='form-control'>
                            <div className="input-field">
                                <input type="text" placeholder='Name' />
                                <input type="email" placeholder='Email' />
                                <input type="text" placeholder='Subject' />
                            </div>
                            <textarea placeholder='Message'></textarea>
                            <button className="btn">send</button>
                        </form>
                    </div>
                </div>
                <div className='line' ></div>
                <p className='copyright'>© {date}, LeadMark Created By <span>Ahsan Mughal</span>. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;