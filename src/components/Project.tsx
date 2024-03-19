import type { ProjectData } from "../data/projectList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import styles from './Project.module.css';

function Project(props: ProjectData) {
    return (
        <div className={styles.project} key={props.id}>
            <img src={props.image} alt={props.title} />
            <div className={styles.title}>

                <a href={props.url} target="_blank">
                    <p>{props.title}<FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.icon} /></p>
                </a>

                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Project;