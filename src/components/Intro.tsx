import styles from './Intro.module.css';

function Intro() {
    return (
        <div className={styles.introContainer}>
            <h1 className={styles.name}>Teddy Peterschmidt</h1>
            <ul>
                <li className={styles.sub2}>Full Stack Developer</li>
                <li className={styles.sub2}>Former biologist</li>
                <li className={styles.sub2}>Baseball fan</li>
            </ul>
        </div>
    )
}

export default Intro;