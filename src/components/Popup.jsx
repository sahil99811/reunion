import React from "react";



const Popup = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 flex justify-end bg-black bg-opacity-50">
          <div className="bg-white w-96 h-full shadow-lg p-4">
            <button
              className="absolute top-4 right-4 text-red-500"
              onClick={onClose}
            >
              Close
            </button>
            <div className="mt-6">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
