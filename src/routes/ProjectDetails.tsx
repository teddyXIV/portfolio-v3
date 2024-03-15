import Modal from "../components/Modal";
import { projectList } from "../data/projectList";

export default function ProjectDetails(props: Details) {
    const project = projectList.find((p) => p.id === props.projectId);
    console.log('wtf');

    if (!project) {
        return (
            <Modal>
                <h1>Project not found</h1>
            </Modal>
        )
    }

    return (
        <Modal>
            <h1>{project.title}</h1>
        </Modal>
    )
}

interface Details {
    projectId: string
}