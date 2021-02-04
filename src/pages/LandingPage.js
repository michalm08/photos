import React from 'react';
import Search from '../components/Search';

const LandingPage = ({ setPhotoName }) => {
  return (
    <>
      <div className='hero-image'>
        <div className='shadow'></div>
        <div className='content'>
          <h1>Unsplash</h1>
          <h3>
            The internet source of <span>freely-usable images</span>
          </h3>
          <h3>Powered by creators everywhere.</h3>
          <Search setPhotoName={setPhotoName} inPhoto={false} />
          <h4>
            <span>Treidng: </span> flower, wallpapers,backgrounds, happy, love
          </h4>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
