import React from 'react';
import './ListingItem.css';

function listingItem() {
  return (
    <div className='listingItem'>
        <img src='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=3352&h=2286&dpr=1' className='' />
        <div className='listing-details'>
            <div className='listing-categories'>
                Categories
            </div>
        </div>
    </div>
  )
}

export default listingItem