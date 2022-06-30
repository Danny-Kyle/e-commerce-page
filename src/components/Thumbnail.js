import React from "react";
import images from "./images-data.js";

const Thumbnail = ({ currentImage, imageId, onClick }) => {
  return (
    <div>
      <img
        src={require(`../images/image-product-${imageId}-thumbnail.jpg`)}
        alt="thumbnail"
        className={`rounded-lg cursor-pointer ${
          currentImage === images[imageId]
            ? "bg-gray-400 opacity-25 ring-2 ring-orange-500"
            : ""
        } hover:ring-2 hover:bg-gray-400 hover:opacity-25 hover:ring-orange-500`}
        onClick={onClick}
      />
    </div>
  );
};

export default Thumbnail;
