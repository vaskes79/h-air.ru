import PropTypes from "prop-types";
import React from "react";
import "./gallery.css";

const Gallery = ({ photos }) => {
  return (
    <div className="Gallery">
      <h3>Gallery</h3>
      <pre>{JSON.stringify(photos, null, 2)}</pre>
    </div>
  );
};

Gallery.propTypes = {
  photos: PropTypes.array,
};

export default Gallery;
