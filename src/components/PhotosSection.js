import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './Image';
// import dotenv from 'dotenv';
// dotenv.config();

const PhotosSection = ({ photoName, setPhotoName }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    loadPhoto(photoName);
    // eslint-disable-next-line
  }, [photoName]);

  let res;
  const loadPhoto = async (photoName) => {
    let URL = `https://api.unsplash.com/search/photos?query=${photoName}&client_id=${process.env.REACT_APP_KEY}`;

    try {
      res = await axios.get(URL);
      setPhotos(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ul className='ulImage'>
      {photos && photos.map((photo) => <Image key={photo.id} photo={photo} />)}
    </ul>
  );
};

export default PhotosSection;
