import React, { useEffect } from "react";
import Parser from "html-react-parser";

const DetailsProject = ({ project }) => {
  const selectedProject = project;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="justify-between items-center max-w-[1000px] m-auto relative pt-[30px] w-full pb-10 bg-white px-5 lg:px-0">
      <div className="overflow-hidden drop-shadow-sm">
        <h3 className="text-center font-bold text-4xl my-10">
          {selectedProject.name}
        </h3>
        <img
          className="h-39 w-full object-cover"
          src={selectedProject.img}
          alt=""
        />
        <div className="p-8">
          <h3 className="font-bold text-2xl my-1 text-center">
            {selectedProject.name}
          </h3>
        </div>
        <div>{Parser(selectedProject.txt)}</div>
      </div>
    </div>
  );
};

export default DetailsProject;
