import Masonry from 'react-masonry-css';
import styles from './Gallery.module.css';

const Gallery = ({ folder, year, number }) => {
  const images = Array.from({ length: number }, (_, i) => ({
    src: `/assets/${folder}/${year}/${i + 1}.jpg`,
    alt: `Drawing ${i + 1}`,
  }));

  const breakpointColumnsObj = {
    default: 4,   // 🖥️ Default: 4 columns
    1100: 3,      // 📱 If screen width <= 1100px → 3 columns
    700: 2,       // 📱 If screen width <= 700px → 2 columns
    500: 1        // 📱 If screen width <= 500px → 1 column
  };  

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.gallery}
      columnClassName={styles.galleryColumn}
    >
      {images.map((img, idx) => (
        <div key={`${folder}-${year}-${idx}`} className={styles.imageWrapper}>
          <img src={img.src} alt={img.alt || `Artwork ${idx}`} loading="lazy" />
        </div>
      ))}
    </Masonry>
  );
};

export default Gallery;
