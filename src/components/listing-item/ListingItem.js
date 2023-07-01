import React from 'react';
import './ListingItem.css';

function listingItem() {
  return (
    <div className='listing-item'>
      <img src='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=3352&h=2286&dpr=1' className='listing-image' />
      <div className='listing-details'>
        <div className='listing-categories'>
          <span className='listing-category'>Buy</span>
          <span className='listing-category'>Sell</span>
        </div>
        <span className='listing-title'>Awesome Property</span>
        <hr />
        <span className='listing-time'>2 days ago</span>

      </div>
      <p className='listing-description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, libero! Quod eum iure placeat cumque, quaerat voluptates voluptatibus et fugit totam hic adipisci odio quibusdam nesciunt quis nemo illum saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, libero! Quod eum iure placeat cumque, quaerat voluptates voluptatibus et fugit totam hic adipisci odio quibusdam nesciunt quis nemo illum saepe.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, libero! Quod eum iure placeat cumque, quaerat voluptates voluptatibus et fugit totam hic adipisci odio quibusdam nesciunt quis nemo illum saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, libero! Quod eum iure placeat cumque, quaerat voluptates voluptatibus et fugit totam hic adipisci odio quibusdam nesciunt quis nemo illum saepe.
      </p>

    </div>
  )
}

export default listingItem