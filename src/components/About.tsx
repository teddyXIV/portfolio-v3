import styles from "./About.module.css";

function About() {
    return (
        <>
            <div id="info">
                <h2>Full stack developer. Former biologist. Baseball geek.</h2>
                <p>As a former fisheries biologist on the Bering Sea, I've transitioned to the world of web development, swapping the rocking boat for a stable standing desk. From battling waves to debugging code, I've learned that adaptability is key, whether at sea or in the ever-evolving landscape of programming—now tackling bugs instead of halibut.</p>
                <p>When I'm not coding, you can find me at a pick up baseball game at Pier Park, browsing <a className={styles.aboutLink} href="https://www.baseball-reference.com/players/r/rodriju01.shtml" target="_blank">Baseball Reference</a>, or enjoying some <a className={styles.aboutLink} href="Project Zomboid" target="_blank">Project Zomboid</a>.</p>
            </div>
        </>
    )
}

export default About;