export interface ExperienceInfo {
    title: string,
    company: string,
    description: string,
    years: string,
    id: number,
}

export const experienceList: ExperienceInfo[] = [
    {
        title: "Full stack developer",
        company: "SignedPic",
        description: "Develop reusable and dynamic React components for seamless interaction with a Django backend and create RESTful APIs. Conduct thorough end-to-end testing for reliability and performance. Built application for Gmail integration.",
        years: "2024",
        id: 0,
    },
    {
        title: "Full stack web development student",
        company: "Epicodus",
        description: "Learned the ins and outs of web development and gained proficiency JavaScript, React, and C#/.NET",
        years: "2023 - 2024",
        id: 6,
    },
    {
        title: "Member experience specialist",
        company: "Wild Alaskan Company",
        description: "Chatted with customers, educated the team on marine species, and rode the ups and downs of a young and quickly growing company.",
        years: "2021 - 2023",
        id: 1,
    },
    {
        title: "Biological science assistant",
        company: "Oregon Department of Fish and Wildlife",
        description: "Trekked across the Coast Range of Oregon on the hunt for steelhead trout breeding grounds. Worked with recreational and commercial fisherfolks to gather data on Pacific Northwest salmon populations.",
        years: "2019 - 2021",
        id: 2
    },
    // {
    //     title: "Habitat specialist",
    //     company: "Ash Creek Forest Management",
    //     description: "Planned, led, and carried out habitat restoration projects across Oregon and southern Washington.",
    //     years: "2020 - 2021",
    //     id: 3
    // },
    // {
    //     title: "Experimental biology aide",
    //     company: "Oregon Department of Fish and Wildlife",
    //     description: "Toured the Columbia Basin and teamed up with commerical, recreational, and tribal fisherfolks to collect information on local salmon migrations.",
    //     years: "2019",
    //     id: 4
    // },
    {
        title: "North Pacific Groundfish Observer",
        company: "Saltwater, Inc.",
        description: "Spent months at a time on the Bering Sea aboard commercial fishing boats, collecting data for NOAA on literal tons of fish.",
        years: "2018 - 2019",
        id: 5
    }
]