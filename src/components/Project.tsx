import type { ProjectData } from "../data/projectList"
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import styles from './Project.module.css';
import { useState } from "react";

function Project(props: ProjectData) {
    const [expand, setExpand] = useState<boolean>(false)
    return (
        <div className={styles.project} key={props.id}>
            {/* <a href={props.url} target="_blank"> */}
                <div className={styles.projectContent}>
                    <img src={props.image} alt={props.title} />
                    <div>
                        <p className={styles.title}>
                            {props.title}<FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.icon} />
                        </p>
                        <p className={styles.description}>
                            {props.description}
                        </p>
                        { expand && 
                            <p>
                                Github API results shown here!
                            </p>
                        }
                        <p className={styles.explore} onClick={() => setExpand(!expand)}>
                            { !expand ? 'Explore' : 'Close' }
                        </p>
                    </div>
                </div>
            {/* </a> */}
        </div>
    )
}

export default Project;