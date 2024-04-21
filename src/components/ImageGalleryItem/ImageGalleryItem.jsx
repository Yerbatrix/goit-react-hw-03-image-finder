import React from 'react';

const ImageGalleryItem = ({ image }) => {
  return (
    <li className="gallery-item">
      <img src={image.webformatURL} alt="" className="gallery-item-image" />
    </li>
  );
};

export default ImageGalleryItem;
