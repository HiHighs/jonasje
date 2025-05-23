import Masonry from 'react-masonry-css';
import styles from './Gallery.module.css';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';


const Gallery = ({ folder, year, filenames }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = filenames.map((filename) => {
    const nameWithoutExtension = filename.replace(/\.[^/.]+$/, '');
    const displayName = nameWithoutExtension.replace(/[-_]/g, ' ');
    return {
      src: `/assets/${folder}/${year}/${filename}`,
      thumbnail: `/assets/${folder}/${year}/thumbnails/${filename}`,
      alt: displayName,
      description: displayName, // ✅ This is what Captions plugin looks for
    };
  });



  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    950: 2,
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
            <img src={img.thumbnail} alt={img.alt} loading="lazy"></img>
            <div className={styles.caption}>{img.alt}</div>
          </div>
        ))}
      </Masonry>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={images}
        animation={{ fade: 600 }}
        plugins={[Captions]}
        captions={{ descriptionTextAlign: 'center' }}
      />
    </>
  );
};

export default Gallery;
