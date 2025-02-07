import SeasonCard from "../seasonCard/SeasonCard";
import styles from "./MainContent.module.css";

interface MainContentProps {
  isVisible: boolean;
}

export default function MainContent({ isVisible }: MainContentProps) {
  return (
    <main
      className={`${styles.mainContent} ${isVisible ? styles.mainContentVisible : ""}`}
      id="mainContent"
    >
      <div className={styles.mainContentGrid}>
        <SeasonCard />
      </div>
    </main>
  );
}
