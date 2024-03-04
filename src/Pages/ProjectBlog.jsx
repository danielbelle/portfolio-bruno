import React from "react";
import datas from "../data/data";
import ProjectsBlog from "../Components/ProjectsBlog";

const ProjectBlog = () => {
  const projects = datas;

  return (
    <>
      <ProjectsBlog projects={projects ? projects : ""} />
    </>
  );
};

export default ProjectBlog;
