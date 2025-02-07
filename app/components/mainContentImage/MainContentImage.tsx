import styles from './MainContentImage.module.css';
import Image, { ImageProps } from 'next/image';

interface MainImageProps extends ImageProps {
  src: string;
  alt: string;
}

export default function MainContentImage({ src, alt, ...rest }: MainImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={200}
      height={200}
      className={styles.image}
      {...rest}
    />
  );
}
