import type { ProjectData } from "../data/projectList"
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import styles from './Project.module.css';
import { useEffect, useState } from "react";
import { Octokit } from "octokit";

function Project(props: ProjectData) {
    const [expand, setExpand] = useState<boolean>(false)
    const [languages, setLanguages] = useState<any>(null)

    

    const getLanguages = async () => {

        const octokit = new Octokit({
            auth: import.meta.env.VITE_GITHUB_KEY
        })

        try {
            const response = await octokit.request('GET /repos/teddyxiv/{repo}/languages', {
                repo: props.id
            })
            setLanguages(response.data)
        } catch(error) {
            console.log("Error getting data: ", error);
        }
    }
    
    useEffect(() => {
        if(expand){
            getLanguages();
        }
    }, [expand])

    const languageList = languages ? Object.entries(languages as { [key: string]: string}).map(([key, value]) => {
        return (
            <li key={key}>
                {key}: {value}
            </li>
        )
    })
    : null;

    return (
        <div className={styles.project} key={props.id}>
                <div className={styles.projectContent}>
                    <img src={props.image} alt={props.title} />
                    <div>
                        <p className={styles.title}>
                            {props.title}
                        </p>
                        <p className={styles.description}>
                            {props.description}
                        </p>
                        { expand && 
                            <>
                                <ul>
                                    {languageList}
                                </ul>
                                <a href={props.url} target='_blank' className={styles.githubLink}>
                                    <p>
                                        View on GitHub 
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.icon} />
                                    </p>
                                </a>
                            </>
                        }
                        <p className={styles.explore} onClick={() => setExpand(!expand)}>
                            { expand ? 'Close' : 'Explore' }
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default Project;