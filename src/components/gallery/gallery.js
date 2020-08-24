import PropTypes from "prop-types";
import React from "react";
import Figure from "../figure";
import Thumb from "../thumb";
import "./gallery.css";

const Gallery = ({ photos }) => {
  return (
    <section className="Gallery">
      <h3>Gallery</h3>
      <button className="Gallery__btn-close">закрыть галерею</button>
      <div className="Gallery__container">
        {photos.map(photo => (
          <Figure key={`Figure_${photo.id}`} {...photo} />
        ))}
        <div className="Gallery__thumb-container">
          {photos.map(photo => (
            <Thumb key={`Figure_${photo.id}`} {...photo} />
          ))}
        </div>
      </div>
      <button className="Gallery__btn Gallery__btn--prev">
        предыдущее фото
      </button>
      <button className="Gallery__btn Gallery__btn--next">
        следующее фото
      </button>
    </section>
  );
};

Gallery.propTypes = {
  photos: PropTypes.array,
};

export default Gallery;
