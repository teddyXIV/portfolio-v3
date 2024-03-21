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
                <Link to="info"
                    className={scrollY < 330 ? styles.currentLoc : styles.link}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500} >
                    About
                </Link>
                <Link to="skills"
                    className={scrollY >= 330 && scrollY < 634 ? styles.currentLoc : styles.link}
                    spy={true}
                    smooth={true}
                    offset={-25}
                    duration={500} >
                    Skills
                </Link>
                <Link to="projects"
                    className={scrollY >= 634 && scrollY < 1500 ? styles.currentLoc : styles.link}
                    spy={true}
                    smooth={true}
                    offset={-25}
                    duration={500} >
                    Projects
                </Link>

                <Link to="experience"
                    className={scrollY >= 1500 ? styles.currentLoc : styles.link}
                    spy={true}
                    smooth={true}
                    offset={-25}
                    duration={500} >
                    Experience
                </Link>
            </h2>
        </>
    )
}

export default NavBar;