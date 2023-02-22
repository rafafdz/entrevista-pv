import React from "react";
import PropTypes from "prop-types";
import ProgressiveImage from "react-progressive-graceful-image";

const Image = ({ prompt, src, srcSmall }) => {
  return (
    <div className="rounded-md relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-full h-full bg-black/0 hover:bg-black/70 transition">
        <div className="flex items-end w-full h-full">
          <p className="grow p-5 text-sm opacity-0 group-hover:opacity-100 transition">
            {prompt}
          </p>
        </div>
      </div>

      <ProgressiveImage src={src} placeholder={srcSmall}>
        {(src, loading) => (
          <img
            className={`rounded-md ${loading && "blur-md"}`}
            src={src}
            alt={prompt}
          />
        )}
      </ProgressiveImage>
    </div>
  );
};

Image.propTypes = {
  prompt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  srcSmall: PropTypes.string.isRequired,
};

export default Image;
