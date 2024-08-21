import type { ExperienceInfo } from "../data/experienceList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faWater, faFish, faTree, faBoxOpen, faCode, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

import styles from "./Experience.module.css";

function Experience(props: ExperienceInfo) {

    const iconArray = [
        <FontAwesomeIcon icon={faCode} size='2x' className={styles.icon} />,
        <FontAwesomeIcon icon={faBoxOpen} size='2x' className={styles.icon} />,
        <FontAwesomeIcon icon={faFish} size='2x' className={styles.icon} />,
        <FontAwesomeIcon icon={faTree} size='2x' className={styles.icon} />,
        <FontAwesomeIcon icon={faWater} size='2x' className={styles.icon} />,
        <FontAwesomeIcon icon={faShip} size='2x' className={styles.icon} />,
        <FontAwesomeIcon icon={faGraduationCap} size='2x' className={styles.icon} />
    ]

    return (
        <>
            <div className={styles.jobContainer} key={props.title}>
                <div className={styles.iconContainer}>
                    {iconArray[props.id]}
                </div>
                <div>
                    <p>{props.years}</p>
                    <h3>{props.title} - {props.company}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default Experience;