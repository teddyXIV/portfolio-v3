import { experienceList } from "../data/experienceList";
import Experience from "./Experience";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faWater, faFish, faTree, faBoxOpen, faCode, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import styles from './ExperienceList.module.css'

function ExperienceList() {

    const iconArray = [
        <FontAwesomeIcon icon={faCode} size='7x' />,
        <FontAwesomeIcon icon={faBoxOpen} size='7x' />,
        <FontAwesomeIcon icon={faFish} size='7x' />,
        <FontAwesomeIcon icon={faTree} size='7x' />,
        <FontAwesomeIcon icon={faWater} size='7x' />,
        <FontAwesomeIcon icon={faShip} size='7x' />
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
            <h2>How I got here</h2>
            <a className={styles.resume}><p >View my full resume here <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.icon} /></p></a>
            {jobs}
        </div>
    )
}

export default ExperienceList;