import { projectList } from "../data/projectList";
import Project from './Project';

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
            <div id="projects">
                {projects}
            </div>
        </>
    )
}

export default ProjectList;