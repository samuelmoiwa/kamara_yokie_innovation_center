import React, { useEffect } from "react";

const ImagePopup = ({ imageSrc, closePopup }) => {
  useEffect(() => {
    const closeOnOutsideClick = (e) => {
      if (e.target.id === "imagePopup") {
        closePopup();
      }
    };
    document.addEventListener("click", closeOnOutsideClick);
    return () => {
      document.removeEventListener("click", closeOnOutsideClick);
    };
  }, [closePopup]);

  return (
    <div
      id="imagePopup"
      className="fixed top-0 left-0 h-full w-full flex justify-center items-center bg-gray-800 bg-opacity-75"
    >
      <div className="max-w-2xl max-h-full overflow-auto bg-white rounded shadow-lg">
        <img src={imageSrc} alt="Selected image" className="p-4" />
        <button
          className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={closePopup}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ImagePopup;
