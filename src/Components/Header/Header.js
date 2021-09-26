import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h2 className="title">Explore Bangladesh</h2>
            <h4>Find your comfortable travel places in Bangladesh with <span>Explore BD </span></h4>
            <h2>Total available places: 12</h2>
            <nav> 
                <a href="/Place">Place</a>
                <a href="/Bus">Bus</a>
                <a href="/Resort">Resort</a>
            </nav>
        </div>
    );
};

export default Header;