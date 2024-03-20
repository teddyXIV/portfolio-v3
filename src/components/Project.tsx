import type { ProjectData } from "../data/projectList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import styles from './Project.module.css';

function Project(props: ProjectData) {
    return (
        <div className={styles.project} key={props.id}>
            <a href={props.url} target="_blank">
                <div className={styles.projectContent}>
                    <img src={props.image} alt={props.title} />
                    <div>
                        <p className={styles.title}>{props.title}<FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.icon} /></p>
                        <p className={styles.description}>{props.description}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Project;