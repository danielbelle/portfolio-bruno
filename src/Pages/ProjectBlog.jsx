import React from "react";
import data from "../data/data";
import { NavLink } from "react-router-dom";

const ProjectBlog = () => {
  const projects = data;

  return (
    <div>
      {projects.map((project) => (
        <NavLink to={"/project/" + project.key} key={project.key}>
          <p>{project.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default ProjectBlog;
