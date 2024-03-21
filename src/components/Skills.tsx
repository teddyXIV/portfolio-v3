import { skillsList } from "../data/skills";
import styles from "./Skills.module.css";

function Skills() {

    const skills = skillsList.map(skill => { return <p className={styles.skill} key={skill}><strong>{skill}</strong></p> })

    return (
        <>
            <div className={styles.skillGrid} id="skills">
                {skills}
            </div>
        </>
    )
}

export default Skills;