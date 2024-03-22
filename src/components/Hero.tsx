import styles from './Hero.module.css';
import Socials from './Socials';

function Hero() {
    return (
        <div>
            <h1 className={styles.name}>Teddy Peterschmidt</h1>
            <Socials />
        </div>
    )
}

export default Hero;