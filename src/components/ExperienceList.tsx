import { experienceList } from "../data/experienceList";
import Experience from "./Experience";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faWater, faFish, faTree, faBoxOpen, faCode } from '@fortawesome/free-solid-svg-icons'

import styles from './ExperienceList.module.css'

function ExperienceList() {

    const iconArray = [
        <FontAwesomeIcon icon={faCode} size='2x' className={styles.icon} />,
        <FontAwesomeIcon icon={faBoxOpen} size='2x' className={styles.icon} />,
        <FontAwesomeIcon icon={faFish} size='2x' className={styles.icon} />,
        <FontAwesomeIcon icon={faTree} size='2x' className={styles.icon} />,
        <FontAwesomeIcon icon={faWater} size='2x' className={styles.icon} />,
        <FontAwesomeIcon icon={faShip} size='2x' className={styles.icon} />
    ]

    const jobs = experienceList.map((job) => {
        return (

            <div className={styles.job}>
                <div className={styles.iconContainer}>{iconArray[job.id]}</div>
                <Experience
                    key={job.id}
                    title={job.title}
                    company={job.company}
                    description={job.description}
                    years={job.years}
                    id={job.id} />
            </div>
        )
    })
    return (
        <div className={styles.expList} id="experience">
            <h2>How I got here</h2>
            {jobs}
        </div>
    )
}

export default ExperienceList;