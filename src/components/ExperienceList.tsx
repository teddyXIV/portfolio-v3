import { experienceList } from "../data/experienceList";
import Experience from "./Experience";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faWater, faFish, faTree, faBoxOpen, faCode, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import styles from './ExperienceList.module.css'

function ExperienceList() {

    const iconArray = [
        <FontAwesomeIcon icon={faCode} size='2x' />,
        <FontAwesomeIcon icon={faBoxOpen} size='2x' />,
        <FontAwesomeIcon icon={faFish} size='2x' />,
        <FontAwesomeIcon icon={faTree} size='2x' />,
        <FontAwesomeIcon icon={faWater} size='2x' />,
        <FontAwesomeIcon icon={faShip} size='2x' />
    ]

    // const jobs = experienceList

    const jobs = experienceList.map((job) => {
        return (

            <div className={styles.job}>
                <div className={styles.icon}>{iconArray[job.id]}</div>
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
        // <>
        //     <div className={styles.expList} id="experience">
        //         <h2>How I got here</h2>
        //         <a className={styles.resume}><p >View my full resume <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.resumeLink} /></p></a>
        //         <div className={styles.expBlock}>
        //             <Experience
        //                 title={jobs[0].title}
        //                 company={jobs[0].company}
        //                 description={jobs[0].description}
        //                 years={jobs[0].years}
        //                 id={jobs[0].id} />
        //             <div className={styles.icon}>{iconArray[0]}</div>
        //         </div>

        //         <div className={styles.expBlock}>
        //             <div className={styles.icon}>{iconArray[1]}</div>
        //             <Experience
        //                 title={jobs[1].title}
        //                 company={jobs[1].company}
        //                 description={jobs[1].description}
        //                 years={jobs[1].years}
        //                 id={jobs[1].id} />
        //         </div>
        //         <div className={styles.expBlock}>
        //             <Experience
        //                 title={jobs[2].title}
        //                 company={jobs[2].company}
        //                 description={jobs[2].description}
        //                 years={jobs[2].years}
        //                 id={jobs[2].id} />
        //             <div className={styles.icon}>{iconArray[2]}</div>
        //         </div>
        //         <div className={styles.expBlock}>
        //             <div className={styles.icon}>{iconArray[3]}</div>
        //             <Experience
        //                 title={jobs[3].title}
        //                 company={jobs[3].company}
        //                 description={jobs[3].description}
        //                 years={jobs[3].years}
        //                 id={jobs[3].id} />
        //         </div>
        //         <div className={styles.expBlock}>
        //             <Experience
        //                 title={jobs[4].title}
        //                 company={jobs[4].company}
        //                 description={jobs[4].description}
        //                 years={jobs[4].years}
        //                 id={jobs[4].id} />
        //             <div className={styles.icon}>{iconArray[4]}</div>
        //         </div>
        //         <div className={styles.expBlock}>
        //             <div className={styles.icon}>{iconArray[5]}</div>
        //             <Experience
        //                 title={jobs[5].title}
        //                 company={jobs[5].company}
        //                 description={jobs[5].description}
        //                 years={jobs[5].years}
        //                 id={jobs[5].id} />
        //         </div>
        //     </div>
        // </>
    )
}

export default ExperienceList;