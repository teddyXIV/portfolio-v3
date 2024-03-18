import { projectList } from "../data/projectList";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
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
            <SwiperSlide className={styles.slide}>
                <Project
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    url={project.url}
                    image={project.image}
                    id={project.id} />
            </SwiperSlide>
        )
    })

    return (
        <>
            <div className={styles.projects}>
                <h1>Projects</h1>
                <div className={styles.swiperContainer}>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={false}
                        slidesPerView={4}
                        initialSlide={2}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true
                        }}
                        slideToClickedSlide={true}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className='swiper-container'
                    >
                        {projects}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default ProjectList;