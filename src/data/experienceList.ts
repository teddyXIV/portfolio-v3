export interface ExperienceInfo {
    title: string,
    company: string,
    description: string,
    years: string,
    id: number,
}

export const experienceList: ExperienceInfo[] = [
    {
        title: "Member experience specialist",
        company: "Wild Alaskan Company",
        description: "Ensured members' logistical needs were covered by carefully checking orders and giving the green light to the MX department for final approval before fulfillment. Juggled 50-80 customer accounts daily, ensuring their satisfaction. Managed internal training on Alaska's commercial marine species.",
        years: "2021 - 2023",
        id: 0,
    },
    {
        title: "Biological science assistant",
        company: "Oregon Department of Fish and Wildlife",
        description: "Identified threatened steelhead trout and nests in backcountry rivers and record locations with GIS software. Planned strategies and safety measures for remote surveys. Communicated monitoring goals to landowners for access.",
        years: "2021",
        id: 1
    },
    {
        title: "Habitat specialist",
        company: "Ash Creek Forest Management",
        description: " Used ArcGIS for mapping restoration work progress, areas of concern, and relevant information. Managed dynamic project needs and goals, including logistics, equipment, plant, and chemical requirements, while efficiently delegating tasks to ensure project success.",
        years: "2020 - 2021",
        id: 2
    },
    {
        title: "Experimental biology aide",
        company: "Oregon Department of Fish and Wildlife",
        description: " Collaborated with commercial and tribal fishing operations to gather biological and population data on salmon runs. Built positive relationships within fishing communities as an ODFW representative and subject matter expert. Assessed fishing efforts in the Willamette, Clackamas, and Columbia rivers",
        years: "2019",
        id: 3
    },
    {
        title: "North Pacific Groundfish Observer",
        company: "Saltwater, Inc.",
        description: "Managed the observation and sampling of 10+ metric tons of wild-caught fish per hour on a fishing vessel at sea. Coordinated with crews in a dangerous environment, recorded precise data, and applied expertise in commercial fishing regulations. Contributed to and error-checked the NOAA fisheries database.",
        years: "2018 - 2019",
        id: 4
    }
]