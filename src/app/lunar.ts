export const LunarText = {
        blurb: "Using Python’s ephem library, this project explores the relationship between the lunar calendar and the Gregorian calendar. The tool prints a list of Gregorian dates that align with specific lunar phase parameters. The user could, for example, see a list of Gregorian dates that correspond to the first full moon of every year from 1995 to 2015.",
        tools: ["Python", "Tkinter"],
} as const;

export const LunarImages = [
    {
        path: "/lunar-images/empty_lunar.png",
        caption: "The inital view of the interface",
    },
    {
        path: "/lunar-images/lunar_example.png",
        caption: "Printing a list of Gregorian dates",
    }
] as const;