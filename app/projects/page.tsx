"use client";
import React from "react";
import ProjectCard from "../components/projects/ProjectCard";

type Props = {};

const Projects = (props: Props) => {
  const projects = {
    title: "RipeMetrics",
    description:
      "An AI powered Business Intelligence, Marketing, and Customer Service platform. As Founding Engineer was responsible for full stack development, and DevOps. Technologies used: React, Next.js, FastAPI, MySQL, AWS, PineconeDB, PHP, Laravel, Material UI, Tailwind and Docker to name a few.",
    image: "/ripeLong.png",
    link: "https://ripemetrics.com",
    github_link: null,
  };
  return (
    <div className="flex items-center justify-center w-full p-4 h-screenInner sm:p-10">
      <ProjectCard
        title={projects.title}
        description={projects.description}
        image={projects.image}
        link={projects.link}
        github_link={projects.github_link}
      />
    </div>
  );
};

export default Projects;
