import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <h2>Fun Cafe</h2>
        <div className="header-menu">
             <a href="#home">Home</a>
             <a href="#about">About</a>
             <a href="#log-in">Login</a>
        </div>
    </div>
  );
};

export default Header;