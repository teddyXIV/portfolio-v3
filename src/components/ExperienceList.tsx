import { experienceList } from "../data/experienceList";
import Experience from "./Experience";

function ExperienceList() {
    const jobs = experienceList.map((job) => {
        return (
            <Experience
                key={job.id}
                title={job.title}
                company={job.company}
                description={job.description}
                years={job.years}
                id={job.id} />
        )
    })
    return (
        <div>
            {jobs}
        </div>
    )
}

export default ExperienceList;