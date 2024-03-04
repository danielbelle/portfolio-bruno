import React from "react";
import { useParams } from "react-router-dom";
import datas from "../data/data";
import DetailsProject from "../Components/DetailsProject";

const DetailProject = () => {
  const href = useParams();
  let project;
  datas.map((data) => (data.ref === href.ref ? (project = data) : ""));

  return (
    <>
      <DetailsProject project={project ? project : ""} />
    </>
  );
};

export default DetailProject;
