import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h2>Explore Bangladesh</h2>
            <h4>Total Places: 12</h4>
            <nav> 
                <a href="/Place">Place</a>
                <a href="/Bus">Bus</a>
            </nav>
        </div>
    );
};

export default Header;