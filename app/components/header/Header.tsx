import NavBar from "../navBar/NavBar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>Stranger Header</h1>
        <NavBar />
    </header>
  );
};

export default Header;
