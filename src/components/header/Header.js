import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='header-section'>
            <div className='hero-text'>
                <span className='hero-text-title'>
                    Marketplace
                </span>
                <span className='hero-text-subtitle'>
                    Property Listing
                </span>
            </div>
            <img src="https://images.pexels.com/photos/1717884/pexels-photo-1717884.jpeg?auto=compress&cs=tinysrgb&w=6502&h=4334&dpr=1" className="hero-image img-fluid" alt="Marketplace Hero" />
        </div>
    )
}

export default Header