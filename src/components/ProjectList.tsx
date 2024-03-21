import { projectList } from "../data/projectList";
import Project from './Project';
import styles from './ProjectList.module.css';

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
        <>
            <div className={styles.projects} id="projects">
                {/* <h2>Projects</h2> */}
                {projects}
            </div>
        </>
    )
}

export default ProjectList;