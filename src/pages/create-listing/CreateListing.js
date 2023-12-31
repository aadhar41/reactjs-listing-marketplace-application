import React from 'react';
import './CreateListing.css';

function CreateListing() {
    return (
        <div className='create-listing'>
            <form className='create-listing-form'>
                <div className='create-listing-form-group'>
                    <input type='text' placeholder='Property title' className='create-listing-text' autoFocus={true} />
                    <label htmlFor='listingImg' className='create-listing-img-upload'>
                        <i class="upload-icon fa-solid fa-upload"></i>
                    </label>
                    <input type='file' className='listingImg' id='listingImg' style={{ display: "none" }} />
                </div>
                <div className='create-listing-form-group'>
                    <textarea className='create-listing-text create-listing-desc' placeholder='Property Description'></textarea>
                </div>
            </form>
            <button className='create-listing-button'>Submit</button>
        </div>
    )
}

export default CreateListing