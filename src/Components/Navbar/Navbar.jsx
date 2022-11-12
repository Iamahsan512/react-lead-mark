import './Navbar.css';
import Logo from '../../imgs/Logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import links from './data';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);


    const changeColor = () => {
        if (window.scrollY >= 100) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    window.addEventListener('scroll', changeColor);

    return (
        <div className={scrollNav ? 'nav-light navbar' : 'navbar'} >
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>

                <ul className={showNav ? 'active menu' : 'menu'}>
                    {
                        links.map((link) => {
                            const { id, url, text, } = link;
                            return <li key={id}>
                                <a href={url} >{text}</a>
                            </li>
                        })
                    }
                    <li><a href="#contact" className='btn'>contact</a></li>
                </ul>

                <div className="humbugger" onClick={() => setShowNav(!showNav)}>
                    {showNav ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </div>
    )
}

export default Navbar;