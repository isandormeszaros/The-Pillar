import React from "react";

const CustomModal = ({ isOpen, onClose, title, content, onConfirm }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-close-btn">
          <button onClick={onClose}><i className="pi pi-times"></i></button>
        </div>
        <div className="modal-title">
          <h1 className="custom-heading-font">{title}</h1>
        </div>
        <div className="modal-body">
          <p className="custom-p-font">{content}</p>
        </div>
        <div className="modal-footer">
          <button className="default-button profile-icon-button" onClick={onClose}>
            <i className="pi pi-arrow-left"></i>Mégse
          </button>
          <button className="default-button default-delete-button profile-icon-button" onClick={onConfirm}>
            <i className="pi pi-trash"></i>Törlés
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;