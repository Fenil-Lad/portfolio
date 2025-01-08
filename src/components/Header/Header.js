import React, { useState } from 'react';
import './Header.css';
import menu from '../../img/menu.png';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <>
            <header class="header">
                {/* <a href="/" id="logo">Æ</a> */}
                <a href="/" id="logo">FENIL L.</a>
                <div id="header_section">
                <a href="#projects" className="header_section_elements">PROJECTS</a>
                <a href="#about" className="header_section_elements">ABOUT</a>
            </div>
            <a href="#contact" className="header_section_elements">CONTACT</a>
                <img
                    src={menu}
                    alt="menu_icon"
                    id="menu_icon"
                    onClick={handleMenuClick}
                    style={{ cursor: 'pointer' }}
                />
            </header>
            {isMenuOpen &&
                <div id="header_section_alt">
                    <a href="#projects" className="header_section_elements_alt">PROJECTS</a>
                    <a href="#about" className="header_section_elements_alt">ABOUT</a>
                    <a href="#contact" className="header_section_elements_alt">CONTACT</a>
                </div>}
        </>
    )
}

export default Header;