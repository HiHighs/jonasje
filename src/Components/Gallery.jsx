import React from 'react';
import styles from './Gallery.module.css';

const Gallery = ({ folder, year, number }) => {
  const images = Array.from({ length: number }, (_, i) => ({
    src: `/assets/${folder}/${year}/${i + 1}.jpg`,
    alt: `Drawing ${i + 1}`
  }));

  return (
    <div className={styles.gallery}>
      {images.map((img, idx) => (
        <div key={`${folder}-${year}-${idx}`} className={styles.imageWrapper}>
          <img src={img.src} alt={img.alt || `Artwork ${idx}`} loading="lazy" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
