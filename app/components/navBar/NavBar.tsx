import MenuLink from '../menuLink/MenuLink';
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <nav className={styles.nav}>
           <MenuLink text='Home' href='/' /> 
           <MenuLink text='Galeria' href='/Galeria' /> 
        </nav>
    );
}