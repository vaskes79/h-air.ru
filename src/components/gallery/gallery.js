import PropTypes from "prop-types";
import React from "react";
import Figure from "../figure";
import "./gallery.css";

const Gallery = ({ photos }) => {
  return (
    <div className="Gallery">
      <h3>Gallery</h3>
      {photos.map(photo => (
        <Figure key={`Figure_${photo.id}`} {...photo} />
      ))}
    </div>
  );
};

Gallery.propTypes = {
  photos: PropTypes.array,
};

export default Gallery;
