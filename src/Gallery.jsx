import React from "react";
import PropTypes from "prop-types";

const Gallery = ({ images }) => {
  //   return images.map((image) => <p>{image.id}</p> )

  return (
    <div className="grid grid-cols-5 gap-1 w-full px-5">
      {images.map((chunk, chunk_idx) => (
        <div className="flex flex-col gap-1 w-full" key={chunk_idx}>
          {chunk.map((image) => (
            <div className="rounded-md relative overflow-hidden" key= {image.id} >
              <div className="absolute top-0 right-0 w-full h-full bg-black opacity-0 hover:opacity-70 transition">
                <div className="flex items-end w-full h-full" >
                  <p className="grow p-5 text-sm">{image.prompt}</p>
                </div>
              </div>
              <img key={image.id} src={image.src} className="rounded-md" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

Gallery.propTypes = {};

export default Gallery;
