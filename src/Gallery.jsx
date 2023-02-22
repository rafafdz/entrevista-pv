import React from "react";
import PropTypes from "prop-types";
import ProgressiveImage from "react-progressive-graceful-image";

const Gallery = ({ images }) => {

  return (
    <div className="grid grid-cols-5 gap-1 w-full px-5">
      {images.map((chunk, chunk_idx) => (
        <div className="flex flex-col gap-1 w-full" key={chunk_idx}>
          {chunk.map((image) => (
            <div className="rounded-md relative overflow-hidden" key={image.id}>
              <div className="absolute top-0 right-0 w-full h-full bg-black/0 hover:bg-black/70 transition">
                <div className="flex items-end w-full h-full">
                  <p className="grow p-5 text-sm opacity-100">{image.prompt}</p>
                </div>
              </div>

              <ProgressiveImage
                src={image.src}
                placeholder={image.srcSmall}
              >
                {(src, loading) => (
                  <img
                    className={`rounded-md ${loading && 'blur-md'}`}
                    src={src}
                    alt={image.prompt}
                  />
                )}
              </ProgressiveImage>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

Gallery.propTypes = {};

export default Gallery;
