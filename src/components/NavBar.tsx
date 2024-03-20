import { Link } from 'react-scroll/modules'
import styles from './NavBar.module.css';


function NavBar() {

    return (
        <>
            <div className={styles.navBar}>
                <Link to="about"
                    className={styles.link}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500} >About</Link>
                <Link to="projects"
                    className={styles.link}
                    spy={true}
                    smooth={true}
                    offset={-25}
                    duration={500} >Projects</Link>
                <Link to="experience"
                    className={styles.link}
                    spy={true}
                    smooth={true}
                    offset={-25}
                    duration={500} >Experience</Link>
            </div>
        </>
    )
}

export default NavBar;