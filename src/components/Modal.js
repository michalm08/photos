import React from 'react';

const Modal = ({ setModal, photo }) => {
  const onClick = () => {
    setModal(false);
  };
  return (
    <div className='modal'>
      <div onClick={onClick} className='shadow' />

      <div className='box'>
        <div className='autor'>
          <img
            className='icon'
            src={photo.user.profile_image.medium}
            alt='author'
          />
          <div>
            <h3>{photo.user.name}</h3>
            <h5>@{photo.user.username}</h5>
          </div>
        </div>
        <img
          className='modalPhoto'
          src={photo.urls.regular}
          alt={photo.alt_description}
        />
        <h4>
          <i className='fas fa-map-marker-alt'></i> {photo.user.location ? photo.user.location : <>Nowhere</> }
        </h4>
      </div>
    </div>
  );
};

export default Modal;
