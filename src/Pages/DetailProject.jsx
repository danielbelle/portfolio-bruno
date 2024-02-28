import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data";
import DetailsProject from "../Components/DetailsProject";

const DetailProject = () => {
  const id = useParams().id;
  console.log();
  const project = data[id];
  return (
    <>
      <DetailsProject project={project ? project : ""} />
    </>
  );
};

export default DetailProject;
