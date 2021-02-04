import React from 'react';
// import { Link } from 'react-router-dom';
import Search from '../components/Search';

const LandingPage = ({ setPhotoName }) => {
  return (
    <>
      <div className='hero-image'>
        <div className='shadow'></div>
        <div className='content'>
          <h1>Unsplash</h1>
          <h3>The internet source of freely usable photos</h3>
          <h3>Powered by creator for everyone</h3>
          <Search setPhotoName={setPhotoName} inPhoto={false}/>
          <h4>
            <span>Treidng: </span> flower, wallpaper, happy, Love
          </h4>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
