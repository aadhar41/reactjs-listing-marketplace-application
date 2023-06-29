import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='header-section'>
            <div className='hero-text'>
                <span className='hero-text-title'>
                    Listings
                </span>
                <span className='hero-text-subtitle'>
                    Listing Application
                </span>
            </div>
            <img src="https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=4252&h=2835&dpr=1" className="hero-image img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="img" />
        </div>
    )
}

export default Header