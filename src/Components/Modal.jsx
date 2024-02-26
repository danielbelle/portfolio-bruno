import React from "react";

const Modal = ({ visible, onClose }) => {
  const handleCloseClick = () => {
    onClose();
  };

  if (!visible) return null;

  return (
    <div
      onClick={handleCloseClick}
      className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded">
        <p>1</p>
      </div>
    </div>
  );
};

export default Modal;
