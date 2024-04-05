"use client";
import React from "react";
import ProjectCard from "../components/projects/ProjectCard";

type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {
      title: "RipeMetrics",
      description:
        "An AI powered Business Intelligence, Marketing, and Customer Service platform. As Founding Engineer was responsible for full stack development, and DevOps. Technologies used: React, Next.js, FastAPI, MySQL, AWS, PineconeDB, PHP, Laravel, Material UI, Tailwind and Docker to name a few.",
      image: "/ripeLong.png",
      link: "https://ripemetrics.com",
      github_link: null,
    },
    {
      title: "BlackJack",
      description:
        " A simple BlackJack game built with React. Technologies used: React, Tailwind, and Vercel.",
      image: "/blackjack.png",
      link: "https://blackjack.carrigan.dev",
      github_link: null,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 sm:flex-row sm:p-10 scrollbar-hide">
      {projects.map((project, index) => {
        return (
          <ProjectCard
            key={`${project.title}-${index}`}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            github_link={project.github_link}
          />
        );
      })}
    </div>
  );
};

export default Projects;
