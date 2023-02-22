import React from "react";
import PropTypes from "prop-types";

import Image from "./Image";

const Gallery = ({ images }) => {
  return (
    <div className="grid grid-cols-5 gap-1 w-full px-5">
      {images.map((chunk, chunkIdx) => (
        <div className="flex flex-col gap-1 w-full" key={chunkIdx}>
          {chunk.map((image) => (
            <Image {...image} key={image.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

// array of shape
Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        prompt: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        srcSmall: PropTypes.string.isRequired,
      })
    )
  ),
};

export default Gallery;
