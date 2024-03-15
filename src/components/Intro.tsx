import styles from './Intro.module.css';

function Intro() {
    return (
        <div className={styles.introContainer}>
            <h1 className={styles.name}>Teddy Peterschmidt</h1>
            <h3>Full Stack Developer</h3>
        </div>
    )
}

export default Intro;