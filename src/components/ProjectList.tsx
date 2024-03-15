import { projectList } from "../data/projectList";
import Project from './Project';
import styles from './ProjectList.module.css';
// import { Link } from "react-router-dom";

function ProjectList() {

    const projects = projectList.map((project) => {
        return (
            <Project
                key={project.id}
                title={project.title}
                description={project.description}
                url={project.url}
                image={project.image}
                id={project.id} />
        )
    })

    return (
        <ul className={styles.projectList}>
            {projects}
        </ul>
    )
}

export default ProjectList;