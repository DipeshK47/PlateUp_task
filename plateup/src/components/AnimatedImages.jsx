
import React from 'react';
import styles from '../styles/components/AnimatedImages.module.scss';

const AnimatedImages = () => {
  const images = [
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbPgiDeJtFIL6Np2zVZXEWGiY225u_z9G_Fpe-FGTH44qqLoEf',
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcReE2jR_kl_ym7DMoEoW5l39sRSwxiEAUhUHdpLLjL2QaibggPR',
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQOY627s0Yzq5t-x9835hZ2gWyeX1pV8XQNEfVli7BHdwnXtDwj',
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSrz01qWOAJwyo_w7FwlfIVExaYNd-8960TDQH_kVFZvKuA65w9',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKUZXxH9gvihw-kJspMGR0uf-pQVfJmSaF4-SWunoDjWYQk_h',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxySkkX_OuiMV4K3g7YSDw-Eq3DCmNgQZX7jA3aJA2jIw0LXAM',
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLLRuc1Edmpo5s6x6ghHdqHkOtMKO9eGr_IeziOOZbdo6bOvt6',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        {images.filter((_, index) => index % 2 === 0).map((src, index) => (
          <div key={index} className={styles.imageContainer}>
            <img src={src} alt={`Animated Image ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>
      <div className={styles.column}>
        {images.filter((_, index) => index % 2 !== 0).map((src, index) => (
          <div key={index} className={styles.imageContainer}>
            <img src={src} alt={`Animated Image ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedImages;