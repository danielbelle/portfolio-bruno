import React from "react";
import data from "../data/data";
import { NavLink } from "react-router-dom";
import ProjectsBlog from "../Components/ProjectsBlog";

const ProjectBlog = () => {
  const projects = data;

  return (
    <div>
      {projects.map((project) => (
        <NavLink to={"/project/" + project.key} key={project.key}>
          <p>{project.name}</p>
        </NavLink>
      ))}
      <ProjectsBlog /> 
    </div>
  );
};

export default ProjectBlog;
