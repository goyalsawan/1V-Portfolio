"use client";

import React from "react";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const ProjectShowcase: React.FC = () => {
  return (
    <>
      {PROJECTS.map((project, index) => (
        <ProjectCard key={project.id} project={project} chapterIndex={index + 1} />
      ))}
    </>
  );
};
