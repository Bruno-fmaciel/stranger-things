import Image from 'next/image';
import styles from './Banner.module.css';

export default function BannerImage() {
    return (
        <div className={styles.bannerContainer}>
            <Image 
                src='/StrangerThings.jpg' 
                alt='Banner de Stranger Things, com todos os personagens' 
                layout="fill" 
                className={styles.bannerImage}
            />
        </div>
    );
}
