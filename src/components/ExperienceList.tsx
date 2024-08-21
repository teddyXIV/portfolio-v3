import { experienceList } from "../data/experienceList";
import Experience from "./Experience";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import styles from './ExperienceList.module.css'

function ExperienceList() {

    const jobs = experienceList.map((job) => {
        return (

            <div className={styles.job} key={job.id}>
                <Experience
                    key={job.title}
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
            <a href="../../Teddy_Peterschmidt_Resume.pdf" target="_blanks" className={styles.resume}><h3>Resume</h3><FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.resumeIcon} /></a>
            {jobs}
        </div>
    )
}

export default ExperienceList;