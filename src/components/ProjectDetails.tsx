import { projectList } from "../data/projectList";

export default function ProjectDetails(props: Details) {
    const project = projectList.find((p) => p.id === props.projectId);
    console.log('wtf');

    if (!project) {
        return (
            <h1>Project not found</h1>

        )
    }

    return (
        <h1>{project.title}</h1>
    )
}

interface Details {
    projectId: string
}