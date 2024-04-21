import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image.largeImageURL);
  };

  return (
    <a href={image.largeImageURL} onClick={handleClick}>
      <li className={css.ImageGalleryItem}>
        <img src={image.webformatURL} alt="" className="gallery-item-image" />
      </li>
    </a>
  );
};

export default ImageGalleryItem;
