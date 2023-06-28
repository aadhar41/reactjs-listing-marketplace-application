import React from 'react'
import './Topbar.css'

function TopBar() {
    return (
        <div className='topbar'>
            <div className='topbar-left'>
                <i className="topbar-social-icon fa-brands fa-instagram"></i>
                <i className="topbar-social-icon fa-brands fa-facebook"></i>
                <i className="topbar-social-icon fa-brands fa-linkedin"></i>
                <i className="topbar-social-icon fa-brands fa-twitter"></i>
            </div>
            <div className='topbar-center'>
                <ul className='topbar-list'>
                    <li className='topbar-list-item'>Home</li>
                    <li className='topbar-list-item'>About</li>
                    <li className='topbar-list-item'>Contact</li>
                    <li className='topbar-list-item'>Create Listing</li>
                    <li className='topbar-list-item'>Logout</li>
                </ul>
            </div>
            <div className='topbar-right'>
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="topbar-profile-pic img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="img" />
                <i class="fa-solid fa-magnifying-glass topbar-search"></i>
            </div>
        </div>
    )
}

export default TopBar