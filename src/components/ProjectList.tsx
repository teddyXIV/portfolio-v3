import { projectList } from "../data/projectList";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Project from './Project';
import styles from './ProjectList.module.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar'

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
                <h2>Projects</h2>
                {projects}
            </div>
        </>
    )
}

export default ProjectList;