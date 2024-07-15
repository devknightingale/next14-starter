import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src='https://images.pexels.com/photos/25950675/pexels-photo-25950675/free-photo-of-a-black-and-white-photo-of-a-woman-with-curly-hair.jpeg'
          alt=''
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
