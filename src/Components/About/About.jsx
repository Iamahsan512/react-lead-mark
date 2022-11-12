import React from 'react';
import './About.css';
import chairs from '../../imgs/about.jpg';
import staff from '../../imgs/about-1.jpg';
import person from '../../imgs/about-2.jpg';

const About = () => {
    return (
        <section id='about' className='about'>
            <div className="container">
                <div className="row">
                    <div className="col-left">
                        <div className="col-heading">
                            <h2>About Company</h2>
                            <p>Architecto provident deserunt</p>
                        </div>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate molestiae temporibus et tenetur unde quasi, cum nemo quo, molestias architecto alias voluptatibus corrupti corporis earum. Necessitatibus maxime modi ipsam, quod!</p>
                        <br />
                        <img src={chairs} alt="chair" />
                    </div>
                    <div className="col-right">
                        <div className="img-container">
                            <div className="staff" id='staff'>
                                <img src={staff} alt="staff" />
                            </div>
                            <div className="person" id="person">
                                <img src={person} alt="person" />
                            </div>
                        </div>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo iusto quidem laborum atque, sapiente ipsa excepturi fuga cum sed in assumenda eos quasi harum culpa laboriosam nulla, incidunt quae. Voluptatum.</p>
                        <br />

                        <strong>There are some escapes, times of trouble from. They do not know the whole thing, they deserve something.</strong>
                        <br />
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ut a dolorem, consectetur, eos suscipit consequatur magnam est dolore obcaecati adipisci expedita, vero, iste ducimus qui numquam animi facilis officia?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About