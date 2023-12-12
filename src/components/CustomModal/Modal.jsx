import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-overlay" onClick={handleClose}></div>

      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>
          <span class="material-symbols-outlined">close</span>
        </button>
        
        {children}
      </div>
    </div>
  );
};

export default Modal;
