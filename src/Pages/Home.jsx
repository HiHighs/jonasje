import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { NavLink } from 'react-router-dom';

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [fadeIn, setFadeIn] = useState(true);

  const images = Array.from({ length: 9 }, (_, i) => ({
    src: `/assets/me/${i + 1}.jpg`,
    alt: `Jonas ${i + 1}`,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setNextImageIndex((prev) => (prev + 1) % images.length);
        setFadeIn(true);
      }, 500); // matches CSS
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.imageContainer}>
        <img
          key={currentImageIndex}
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          className={`${styles.slideshowImage} ${fadeIn ? styles.fadeIn : styles.fadeOut}`}
        />
        <img
          key={nextImageIndex}
          src={images[nextImageIndex].src}
          alt={images[nextImageIndex].alt}
          className={`${styles.slideshowImage} ${fadeIn ? styles.fadeOut : styles.fadeIn}`}
        />

      <div className={styles.buttonContainer}>
        <NavLink to='paintings_2025' className={styles.button}>
          EXPLORE
        </NavLink>
      </div>

      </div>

    </div>
  );
}

export default Home;
