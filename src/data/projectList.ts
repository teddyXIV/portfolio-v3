import maxRushPng from "../assets/maxRush.png";
import currencyEx from "../assets/currencyEx.png";
import invTracker from "../assets/invTracker.png";
import mariners from '../assets/mariners.png';
import factory from '../assets/factory.png';


export interface ProjectData {
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
        image: factory,
        id: "factory"
    },
    {
        title: "Redux Inventory Tracker",
        description: "An application using React + Redux + TypeScript that tracks inventory for a fictional surf shop.",
        url: "https://github.com/teddyXIV/redux-inventory-tracker",
        image: invTracker,
        id: "inventory-tracker"
    },
    {
        title: "maxRUSH",
        description: "A platformer game built in the Godot engine using C# and GDScript. Built with a team of engineers using an agile development approach.",
        url: "https://github.com/teddyXIV/Max_Rush",
        image: maxRushPng,
        id: "maxrush"
    },
    {
        title: "Seattle Mariners API",
        description: "An ASP.NET web API for offensive statistics for the 2023 Seattle Mariners.",
        url: "https://github.com/teddyXIV/MarinersAPI.Solution",
        image: mariners,
        id: "mariners-api"
    },
    {
        title: "Currency Exchanger",
        description: "An application that allows the user to enter a currency and convert it into another currency at the current exchange rate via an API.",
        url: "https://github.com/teddyXIV/Currency-Exchanger",
        image: currencyEx,
        id: "currency-exchange"
    }
]