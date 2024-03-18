import type { ExperienceInfo } from "../data/experienceList";
import styles from "./Experience.module.css";

function Experience(props: ExperienceInfo) {

    return (
        <>
            <div className={styles.jobContainer} key={props.id}>
                <div className={styles.years}>
                    <h3>{props.years}</h3>
                </div>
                <div className={styles.jobDescription}>
                    <h3>{props.title} - {props.company}</h3>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Experience;