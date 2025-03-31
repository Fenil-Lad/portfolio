import React from 'react';
import './Header.css';
import Navigator from '../Navigator/Navigator';

const Header = () => {
    return (
        <div id='headerContainer'>
            <header className={`header`}>
                <a href="/" id="logo">FENIL L.</a>
            </header>
            <Navigator></Navigator>
        </div>
    );
};

export default Header;
