import React from 'react';
import './Home.css';
import Header from '../../components/header/Header';

function Home() {
  return (
    <div className='home-page'>
        <Header />
        <p>
            Its home page.
        </p>
    </div>
  )
}

export default Home