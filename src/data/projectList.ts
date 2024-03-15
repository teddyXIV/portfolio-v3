interface ProjectData {
    title: string,
    description: string,
    url: string,
    image: string,
    id: string
}

export const projectList: ProjectData[] = [
    {
        title: "Factory",
        description: "An ASP.NET MVC web application to help a fictional factory manage engineers and machines.",
        url: "https://github.com/teddyXIV/Factory.Solution",
        image: '../assets/react.svg',
        id: "factory"
    },
    {
        title: "Redux Inventory Tracker",
        description: "An application using React + Redux + TypeScript that tracks inventory for a fictional surf shop.",
        url: "https://github.com/teddyXIV/redux-inventory-tracker",
        image: '../assets/maxRush.png',
        id: "inventory-tracker"
    },
    {
        title: "maxRUSH",
        description: "A platformer game built in the Godot engine. Built with a team of developes using an agile development approach.",
        url: "https://github.com/teddyXIV/Max_Rush",
        image: '../assets/maxRush.png',
        id: "maxrush"
    },
    {
        title: "Seattle Mariners API",
        description: "An ASP.NET web API for offensive statistics for the 2023 Seattle Mariners.",
        url: "https://github.com/teddyXIV/MarinersAPI.Solution",
        image: '../assets/maxRush.png',
        id: "mariners-api"
    },
    {
        title: "Currency Exchanger",
        description: "An application that allows the user to enter a currency and convert it into another currency at the current exchange rate.",
        url: "https://github.com/teddyXIV/Currency-Exchanger",
        image: '../assets/maxRush.png',
        id: "currency-exchange"
    }
]