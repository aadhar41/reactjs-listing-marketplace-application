import React from 'react';
import './Listing.css';
import ListingItem from '../listing-item/ListingItem';

function Listing() {
  return (
    <div className='listing-section'>
      <ListingItem />
      <ListingItem />
      <ListingItem />
      <ListingItem />
      <ListingItem />
      <ListingItem />
    </div>
  )
}

export default Listing