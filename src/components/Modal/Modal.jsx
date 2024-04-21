import React from 'react';

const Modal = ({ onClose, largeImageUrl }) => {
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleBackdropClick}>
      <div className="modal" onKeyDown={handleKeyDown} tabIndex="0">
        <img src={largeImageUrl} alt="" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
