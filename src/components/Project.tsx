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
    const [expand, setExpand] = useState<boolean>(false)
    const [languages, setLanguages] = useState<string[]>([])
    const [usage, setUsage] = useState<number[]>([])
    const [polarData, setpolarData] = useState<ChartData<'polarArea'>>({
        labels: [],
        datasets: [{
            label: "Language usage",
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1,
        }]
    })

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
                    color: '#ffffff', // Set the font color for the legend labels
                    font: {
                        size: 14, // Optionally, you can set the font size
                    }
                }
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

            const data = response.data;

            const newLanguages: string[] = [];
            const newUsage: number[] = [];

            Object.entries(data as { [key: string]: number}).map(([key, value]) => {
                newLanguages.push(key);
                newUsage.push(value);
            })

            setLanguages(newLanguages);
            setUsage(newUsage);

            setpolarData(prevState => ({
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
                        <p className={styles.explore} onClick={() => setExpand(!expand)}>
                            { expand ? 'Close' : 'Explore' }
                        </p>
                    </div>
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