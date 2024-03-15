import type { ProjectData } from "../data/projectList"
import styles from './Project.module.css';

function Project(props: ProjectData) {
    return (
        <li className={styles.project} key={props.id}>
            <img src={props.image} alt={props.title} />
            <div className={styles.title}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </li>
    )
}

export default Project;