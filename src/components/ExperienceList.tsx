import { experienceList } from "../data/experienceList";
import Experience from "./Experience";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faWater, faFish, faTree, faBoxOpen } from '@fortawesome/free-solid-svg-icons'

import styles from './ExperienceList.module.css'

function ExperienceList() {

    const iconArray = [
        <FontAwesomeIcon icon={faBoxOpen} size='10x' />,
        <FontAwesomeIcon icon={faFish} size='10x' />,
        <FontAwesomeIcon icon={faTree} size='10x' />,
        <FontAwesomeIcon icon={faWater} size='10x' />,
        <FontAwesomeIcon icon={faShip} size='10x' />
    ]

    const jobs = experienceList.map((job) => {
        return (

            <div className={styles.job}>
                {iconArray[job.id]}
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
            <h2>Experience</h2>
            {jobs}
        </div>
    )
}

export default ExperienceList;