import React from 'react';
import './ListingDetail.css';

function ListingDetail() {
    return (
        <div className='listing-detail'>
            <div className='listing-detail-content'>
                <img src='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=3352&h=2286&dpr=1' className='listing-detail' />
                <h2 className='listing-detail-title'>
                    Awesome Property
                    <div className='listing-detail-action'>
                        <i class="fa-solid fa-pen-to-square"></i>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </h2>
            </div>
        </div>
    )
}

export default ListingDetail