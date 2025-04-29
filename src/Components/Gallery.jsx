import React from 'react';
import styles from './Gallery.module.css';

const Gallery = ({ images }) => {
  return (
    <div className={styles.gallery}>
      {images.map((img, idx) => (
        <div key={idx} className={styles.imageWrapper}>
          <img src={img.src} alt={img.alt || `Artwork ${idx}`} loading="lazy" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
