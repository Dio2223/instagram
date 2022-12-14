import React from "react";
import "./style.css";
const UploadImage = ({ imageInput, handleUpload }) => {
  return (
    <div
      className="relative p-6 flex items-center justify-center"
      style={{ width: 570, height: 570, zIndex: 10000 }}
    >
      <div>
        <div className="mb-10 font-normal text-1xl">
        Post pictures and videos here
        </div>
        <div className="flex justify-center">
          <input
            type="file"
            className="hidden"
            ref={imageInput}
            onChange={handleUpload}
          />
          <button
            type="button"
            id = "btnimgClick"
            className="bg-blue-400 font-bold text-sm rounded text-white px-2 py-1 "
            onClick={() => imageInput.current.click()}
          >
            Select from Desktop
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
