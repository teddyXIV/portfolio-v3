import type { ProjectData } from "../data/projectList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import styles from './Project.module.css';
import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import { PolarArea } from "react-chartjs-2";
import { 
    ChartOptions, 
    ChartData,
    Chart,
    PolarAreaController,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    ArcElement
 } from 'chart.js';

 Chart.register(
    PolarAreaController,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    ArcElement
);

const Project = (props: ProjectData) => {
    const [expand, setExpand] = useState<boolean>(false);
    const [polarData, setPolarData] = useState<ChartData<'polarArea'>>({
        labels: [],
        datasets: [{
            label: "Total bytes",
            data: [],
            backgroundColor: [
                'rgb(102, 51, 153, 0.75)',
                'rgba(255, 165, 0, 0.75)',
                'rgba(0, 191, 255, 0.75)',
                'rgba(255, 0, 128, 0.75)',
                'rgba(47, 79, 79, 0.75)'
            ],
            borderColor: [
                'rgba(102, 51, 153, 1)',
                'rgba(255, 165, 0, 1)',
                'rgba(0, 191, 255, 1)',
                'rgba(255, 0, 128, 1)',
                'rgba(47, 79, 79, 1)'
            ],
            borderWidth: 1,
        }]
    });

    const options: ChartOptions<'polarArea'> = {
        scales: {
            r: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.5)'
                },
                pointLabels: {
                    display: false
                }
            } 
        },
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff', 
                    font: {
                        size: 14, 
                    }
                }
            }
        }
    };

    const getLanguages = async () => {

        const octokit = new Octokit({
            auth: import.meta.env.VITE_GITHUB_KEY
        })

        try {
            const response = await octokit.request('GET /repos/teddyxiv/{repo}/languages', {
                repo: props.id
            })

            const data = response.data;

            const newLanguages: string[] = [];
            const newUsage: number[] = [];

            Object.entries(data as { [key: string]: number}).map(([key, value]) => {
                newLanguages.push(key);
                newUsage.push(value);
            })

            setPolarData(prevState => ({
                ...prevState,
                labels: newLanguages,
                datasets: prevState.datasets.map(dataset => ({
                    ...dataset,
                    data: newUsage
                }))
            }))

        } catch(error) {
            console.log("Error getting data: ", error);
        }
    };
    
    useEffect(() => {
        if(expand) {
            getLanguages();
        }
    }, [expand, polarData])

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
                            <div>
                                { polarData?.labels?.length ? 
                                    <LanguageChart
                                        data={polarData}
                                        options={options}
                                    /> 
                                    : <p>Loading...</p>}

                                <a href={props.url} target='_blank' className={styles.githubLink}>
                                    <p>
                                        View on GitHub 
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.icon} />
                                    </p>
                                </a>
                            </div>
                        }
                        <button className={styles.viewDetails} onClick={() => setExpand(!expand)}>
                            { expand ? 'Close' : 'View details' }
                        </button>
                    </div>
                    {/* { expand && 
                            <div>
                                { polarData?.labels?.length ? 
                                    <LanguageChart
                                        data={polarData}
                                        options={options}
                                    /> 
                                    : <p>Loading...</p>}

                                <a href={props.url} target='_blank' className={styles.githubLink}>
                                    <p>
                                        View on GitHub 
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.icon} />
                                    </p>
                                </a>
                            </div>
                        } */}
                </div>
        </div>
    )
}

export default Project;

const LanguageChart = (props: { data: ChartData<'polarArea'>, options: ChartOptions<'polarArea'> }) => {
    return (
        <div className={styles.chartContainer}>
            <h2>Language breakdown</h2>
            <PolarArea 
                data={props.data}
                options={props.options}
                />
        </div>
    )
}