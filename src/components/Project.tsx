import type { ProjectData } from "../data/projectList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import styles from './Project.module.css';
import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import { Radar } from "react-chartjs-2";
import { 
    ChartOptions, 
    ChartData,
    Chart,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
 } from 'chart.js';

 Chart.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

function Project(props: ProjectData) {
    const [expand, setExpand] = useState<boolean>(false)
    const [languages, setLanguages] = useState<string[]>([])
    const [usage, setUsage] = useState<number[]>([])
    const [radarData, setRadarData] = useState<ChartData<'radar'>>({
        labels: [],
        datasets: [{
            label: "Languages Used",
            data: [],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        }]
    })
    const options: ChartOptions<'radar'> = {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 50,
                suggestedMax: 100
            }
        }
    };

    // const options: ChartOptions = {
    //     elements: {
    //         line: {
    //             borderWidth: 3
    //         }
    //     }
    //  }
    

    const getLanguages = async () => {

        const octokit = new Octokit({
            auth: import.meta.env.VITE_GITHUB_KEY
        })

        try {
            const response = await octokit.request('GET /repos/teddyxiv/{repo}/languages', {
                repo: props.id
            })
            // setLanguages(response.data)
            const data = response.data;

            Object.entries(data as { [key: string]: number}).map(([key, value]) => {
                setLanguages(prevLanguages => [...prevLanguages, key]);
                setUsage(prevUsage => [...prevUsage, value]);
            })

            setRadarData(prevState => ({
                ...prevState,
                labels: languages,
                datasets: prevState.datasets.map(dataset => ({
                    ...dataset,
                    data: usage
                }))
            }))

        } catch(error) {
            console.log("Error getting data: ", error);
        }
    }
    
    useEffect(() => {
        if(expand) {
            getLanguages();
        }
    }, [expand])

    const languageList = languages.map((lang, index) => {
        return (
            <li key={index}>
                {lang}
            </li>
        )
    });

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
                                {/* <ul>
                                    <li>Just</li>
                                    <li>Some</li>
                                    <li>Placeholder</li>
                                    <li>Points</li>
                                    {languageList}
                                </ul> */}
                                <LanguageRadar
                                    data={radarData}
                                    options={options}/>

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

const LanguageRadar: React.FC<{data: ChartData<'radar'>, options: ChartOptions<'radar'>}> = ({ data, options }) => {
    return (
        <div>
            <h2>Language Usage</h2>
            <Radar 
                data={data}
                />
        </div>
    )
}