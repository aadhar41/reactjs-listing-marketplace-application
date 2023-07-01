import React from 'react';
import './Detail.css';
import ListingDetail from '../../components/listing-detail/ListingDetail';
import Sidebar from '../../components/sidebar/Sidebar';

function Detail() {
  return (
    <div className='detail-page'>
        <ListingDetail />
        <Sidebar />
    </div>
  )
}

export default Detail