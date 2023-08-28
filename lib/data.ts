import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Engineering",
    location: "Mumbai, IND",
    description:
      "I graduated after 3 years of studying. I immediately found a job as a java developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Java Developer",
    location: "Mumbai, IND",
    description:
      "I worked as a java developer for 1 years. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Masters in Game Design",
    location: "Orlando, FL",
    description:
      "I graduated from Full Sail University with a Masters degree in Game Design that provided me with a great perspective in game design, development and quality assurance.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Game Developer",
    location: "Miami, FL",
    description:
      "I created innovative logics to tackle the stagnated social media industry.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Product Manager",
    location: "Miami, FL",
    description:
      "I managed a team to drive functionalities towards the products maturity.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Unity",
  "Unreal",
  "Jira",
  "Trello",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "Framer Motion",
] as const;
