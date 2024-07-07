import React from "react";
import { projects as initialProjects, Project } from "../data/project";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  searchTerm: string;
}

const ProjectList: React.FC<ProjectListProps> = ({ searchTerm }) => {
  const filteredProjects = initialProjects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      {filteredProjects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
