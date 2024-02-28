import React from "react";
import data from "../data/data";
import ProjectsBlog from "../Components/ProjectsBlog";

const ProjectBlog = () => {
  const projects = data;

  return (
    <>
      <ProjectsBlog projects={projects ? projects : ""} />
    </>
  );
};

export default ProjectBlog;
