import { NavItemData, Skill } from "@/types";
import { ContactButtonProps } from "@/types/propTypes";
import Swal from "sweetalert2";

export const navItemData: NavItemData[] = [
    {
        text: "About",
        href: "#about",
    },
    {
        text: "Education",
        href: "#education",
    },
    {
        text: "Skills",
        href: "#skills",
    },
    {
        text: "Academic Results",
        href: "#academic-results",
    },
    {
        text: "Contact",
        href: "#contact",
    },
];

export const skills: Skill[] = [
    {
        name: "HTML",
        path: "/assets/icons/HTML5.svg",
    },
    {
        name: "CSS",
        path: "/assets/icons/CSS3.svg",
    },
    {
        name: "Scss",
        path: "/assets/icons/Sass.svg",
    },
    {
        name: "JavaScript",
        path: "/assets/icons/JavaScript.svg",
    },
    {
        name: "TypeScript",
        path: "/assets/icons/TypeScript.svg",
    },
    {
        name: "Python",
        path: "/assets/icons/Python.svg",
    },
    {
        name: "Java",
        path: "/assets/icons/Java.svg",
    },
    {
        name: "React",
        path: "/assets/icons/react.svg",
    },
    {
        name: "Tailwind CSS",
        path: "/assets/icons/Tailwind CSS.svg",
    },
    {
        name: "Express",
        path: "/assets/icons/Express.svg",
    },
    {
        name: "Node.js",
        path: "/assets/icons/Node.js.svg",
    },
    {
        name: "Bun",
        path: "/assets/icons/Bun.svg",
    },
    {
        name: "MySQL",
        path: "/assets/icons/MySQL.svg",
    },
    {
        name: "Git",
        path: "/assets/icons/Git.svg",
    },
    {
        name: "Vite.js",
        path: "/assets/icons/Vite.js.svg",
    },
    {
        name: "Postman",
        path: "/assets/icons/Postman.svg",
    },
    {
        name: "IntelliJ IDEA",
        path: "/assets/icons/IntelliJ IDEA.svg",
    },
    {
        name: "DataGrip",
        path: "/assets/icons/DataGrip.svg",
    },
];

export const contactButtons: ContactButtonProps[] = [
    {
        text: "email",
        href: "mailto:warin.sai@ku.th",
        iconPath: "/assets/svgs/envelope-solid.svg"
    },
    {
        text: "instagram",
        href: "https://www.instagram.com/warin.dev/",
        iconPath: "/assets/svgs/instagram-brands-solid.svg",
    },
    {
        text: "github",
        href: "https://github.com/WarinCode",
        iconPath: "/assets/svgs/github-brands-solid.svg"
    },
    {
        text: "line",
        href: "",
        iconPath: "/assets/svgs/line-brands-solid.svg",
        onClick: (): void => {
            Swal.fire({
                title: "Line ID",
                icon: "info",
                text: "Line ID: varin471"
            })
        },
    },
];

export const grades: string[] = [
    "A",
    "B+",
    "B",
    "C+",
    "C",
    "D+",
    "D",
    "F",
    "W",
    "I",
];

export const credits: number[] = [3, 2, 1];

export const buttonStyled: string = "w-56 h-14 bg-primary border-2 border-tertiary rounded-md text-tertiary p-4 delay-200 transition ease-linear hover:text-black hover:border-transparent hover:bg-secondary select-none shadow-md hover:shadow-tertiary hover:scale-95";