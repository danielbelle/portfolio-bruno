import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data";

const DetailProject = () => {
  const id = useParams().id;
  console.log()
  const project = data[id];
  return (
    <>
      <h1>{project.name}</h1>
    </>
  );
};

export default DetailProject;
