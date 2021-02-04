import React from 'react';
import PhotosSection from '../components/PhotosSection';
import Search from '../components/Search';

const Photos = ({ photoName, setPhotoName }) => {
  return (
    <div className='photosPage'>
      <div className='searchPhotos'>
        <Search
          setPhotoName={setPhotoName}
          photoName={photoName}
          inPhoto={true}
        />
      </div>
      <h1>{photoName}</h1>
      <ul className='ulMainTags'>
        <li>Island</li>
        <li>Beach</li>
        <li>Sky</li>
        <li>Dog</li>
        <li>Ocean</li>
        <li>Some</li>
        <li>Nice</li>
        <li>Words</li>
        <li>Are</li>
        <li>Here</li>
        <div className='cover'></div>
      </ul>

      <div className='photos'>
        <PhotosSection photoName={photoName} setPhotoName={setPhotoName} />
      </div>
    </div>
  );
};

export default Photos;
