import React from "react";
import { Link } from "react-router-dom";

const ProjectsBlog = ({ projects }) => {
  return (
    <div className="w-full bg-white py-[50px]">
      <div className="max-w-[1160px] mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 text-black m-auto items-center justify-center">
          {projects.map((project) => (
            <Link className="" key={project.key} to={`/project/${project.ref}`}>
              <div className="min-h-[250px] inline-block max-h-[450px] min-w-[240px] max-w-[300px] bg-white mx-1 ">
                <div className="flex flex-col border-solid border-[0.1rem] border-gray-500 rounded-[32px] rounded-t-[30px] min-h-[150px] hover:shadow-xl">
                  <div className="flex items-start min-h-[200px] border-b-[0.1rem]">
                    <img
                      src={project.img}
                      alt="project"
                      className="h-[100%] w-[100%] rounded-t-[29px]"
                    />
                  </div>
                  <div className="flex flex-col min-h-[100px] bg-[#fafafa] bottom-0 rounded-b-[32px] p-2">
                    <h2 className="font-bold sm:text-1xl my-1 text-sm text-start">
                      {project.name}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsBlog;
