import styles from "./navbar.module.css";
import { FaGithub } from "react-icons/fa";


const Navbar = () => {

    
    return (
        <nav className={styles.nav}>
            <span className={styles.puch}></span>
            <h1 className={styles.title}>florist</h1>
            <a href="https://github.com/Masiha-mohammadpoor/search-and-filter" target="_blank">
                <FaGithub className={styles.github}/>
            </a>
        </nav>
    );
}

export default Navbar;