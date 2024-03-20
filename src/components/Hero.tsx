import styles from './Hero.module.css';
import Socials from './Socials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function Hero() {
    return (
        <div className={styles.heroContainer} id="about">
            <h1 className={styles.name}>Teddy Peterschmidt</h1>
            <ul>
                <li className={styles.sub2}>Full Stack Developer</li>
                <li className={styles.sub2}>Former biologist</li>
                <li className={styles.sub2}>Baseball geek</li>
            </ul>
            <a href="https://drive.google.com/file/d/1wqcdGCfGetbVF3lOg9xcjdNbRV3k_oNP/view?usp=sharing" target="_blanks" className={styles.resume}>Resume <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.icon} /></a>
            <Socials />
        </div>
    )
}

export default Hero;