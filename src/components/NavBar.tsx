import { useState, useEffect } from 'react'
import { Link } from 'react-scroll/modules'
import styles from './NavBar.module.css';


function NavBar() {

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const yPos = window.scrollY;
        setScrollY(yPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <h2 className={styles.navBar}>
                <Link to="projects"
                    className={scrollY < 812 ? styles.currentLoc : styles.link}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500} >
                    Projects |
                </Link>

                <Link to="experience"
                    className={scrollY >= 812 ? styles.currentLoc : styles.link}
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500} > Experience
                </Link>
            </h2>
        </>
    )
}

export default NavBar;