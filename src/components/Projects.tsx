import { projectList } from "../data/projectList";
import maxRushPng from "../assets/maxRush.png"
import styles from './Projects.module.css';
import { Link } from "react-router-dom";

export default function Projects() {

    const projects = projectList.map((project) => {
        return (
            <li className={styles.project} key={project.id}>
                <Link to={project.id}>
                    <img src={maxRushPng} alt={project.title} />
                    <div className={styles.title}>
                        <h2>{project.title}</h2>
                        {/* <p>{project.description}</p> */}
                        {/* <a href={project.url}>View</a> */}
                    </div>
                </Link>
            </li>
        )
    })

    return (
        <ul className={styles.projectList}>
            {projects}
        </ul>
    )
}