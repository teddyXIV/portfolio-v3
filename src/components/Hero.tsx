import styles from './Hero.module.css';
import Socials from './Socials';

function Hero() {
    return (
        <div className={styles.heroContainer} id="about">
            <h1 className={styles.name}>Teddy Peterschmidt</h1>
            <ul>
                <li className={styles.sub2}>Full Stack Developer</li>
                <li className={styles.sub2}>Former biologist</li>
                <li className={styles.sub2}>Baseball geek</li>
            </ul>

            <Socials />
        </div>
    )
}

export default Hero;