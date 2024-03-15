import React, { useEffect } from "react";
import datas from "../data/data";
import ProjectsBlog from "../Components/ProjectsBlog";

const ProjectBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const projects = datas;

  return (
    <>
      <ProjectsBlog projects={projects ? projects : ""} />
    </>
  );
};

export default ProjectBlog;
