import React, { useState } from 'react';
import Modal from './Modal';

const Image = ({ photo }) => {
  const [modal, setModal] = useState(false);
  const onClick = () => {
    setModal(true);
  };
  return (
    <>
      <li className='liImage'>
        <img
          className='imgOnSite'
          onClick={onClick}
          key={photo.id}
          src={photo.urls.small}
          alt={photo.alt_description}
        />
        <div className='taggs'>
          <ul>
            {photo.tags.length > 0 ? <li>{photo.tags[0].title}</li> : null}
            {photo.tags.length > 1 ? <li>{photo.tags[1].title}</li> : null}
            {photo.tags.length > 2 ? <li>{photo.tags[2].title}</li> : null}
          </ul>
        </div>
      </li>
      {modal && <Modal setModal={setModal} photo={photo} />}
    </>
  );
};

export default Image;
