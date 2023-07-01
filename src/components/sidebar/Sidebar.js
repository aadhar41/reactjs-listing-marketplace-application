import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className='sidebar-section'>
            <div className='sidebar-subsection'>
                <span className='sidebar-title'>
                    About Me
                </span>
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="sidebar-img img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="img" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, libero! Quod eum iure placeat cumque, quaerat voluptates voluptatibus et fugit totam hic adipisci odio quibusdam nesciunt quis nemo illum saepe.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facere fugiat aut ipsa temporibus. Voluptatem architecto maiores, voluptatum nulla quis quam ipsam sequi? Omnis reprehenderit magni, sit ipsum eum maiores!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam accusamus, odio nesciunt hic odit eius facere consequatur esse porro voluptas dolore saepe doloribus labore fugiat ipsum? Consectetur, quam? Velit, et!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam impedit praesentium similique, tempore quo laborum. Obcaecati, quos quaerat? Beatae cum voluptas ipsam explicabo sunt quibusdam veniam. Iure incidunt provident dolor.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore tenetur sit alias consectetur voluptas laboriosam, accusamus, minus vitae asperiores atque nobis doloremque fugiat debitis assumenda neque deleniti sunt, itaque sint!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat repudiandae fuga! Sunt earum exercitationem, itaque illum tenetur reiciendis aperiam ea minus placeat voluptate deserunt quos expedita. Nostrum, cupiditate voluptate!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus architecto, facere reprehenderit tempora magnam atque numquam vitae quas alias maiores sapiente distinctio eligendi, at harum debitis expedita accusamus fugiat quasi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repudiandae explicabo animi tempora eos natus, recusandae, perferendis sit, totam alias molestiae necessitatibus hic porro ad! Rem saepe iusto totam eligendi.
                </p>
            </div>
            <div className='sidebar-subsection'>
                <span className='sidebar-title'>
                    Categories
                </span>
                <ul className='sidebar-categories'>
                    <li className='sidebar-category'>Buy</li>
                    <li className='sidebar-category'>Sell</li>
                    <li className='sidebar-category'>Rent</li>
                    <li className='sidebar-category'>Hostel</li>
                    <li className='sidebar-category'>B & B</li>
                    <li className='sidebar-category'>Hotel</li>
                </ul>
            </div>
            <div className='sidebar-subsection'>
                <span className='sidebar-title'>Follow us</span>
                <div className='sidebar-social-icons'>
                    <i className="sidebar-social-icon fa-brands fa-instagram"></i>
                    <i className="sidebar-social-icon fa-brands fa-facebook"></i>
                    <i className="sidebar-social-icon fa-brands fa-linkedin"></i>
                    <i className="sidebar-social-icon fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar