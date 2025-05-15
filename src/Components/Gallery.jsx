import Masonry from 'react-masonry-css';
import styles from './Gallery.module.css';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Gallery = ({ folder, year, number }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = Array.from({ length: number }, (_, i) => ({
    src: `/assets/${folder}/${year}/${i + 1}.jpg`,
    alt: `Drawing ${i + 1}`,
  }));

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const handleClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.gallery}
        columnClassName={styles.galleryColumn}
      >
        {images.map((img, idx) => (
          <div
            key={`${folder}-${year}-${idx}`}
            className={styles.imageWrapper}
            onClick={() => handleClick(idx)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </Masonry>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={images}
        animation={{ fade: 600 }}
        style={{ '--yarl-bg-color': 'rgba(94, 58, 255, 0.8)' }}
      />
    </>
  );
};

export default Gallery;
