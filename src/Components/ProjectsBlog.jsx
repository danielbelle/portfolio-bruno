import React from "react";
import { Link } from "react-router-dom";

const ProjectsBlog = ({ projects }) => {
  return (
    <div className="w-full bg-white py-[50px]">
      <div className="max-w-[1160px] mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ss:grid-cols-1 gap-4 px-4 text-black ">
          {projects.map((project) => (
            <Link key={project.key} to={`/project/${project.ref}`}>
              <div className="bg-white rounded-xl overflow-hidden drop-shadow-md border-[0.1rem] border-[#f5f5f5]">
                <img
                  className="h-56 w-full object-cover"
                  src={project.img}
                  alt=""
                />
                <div className="p-5">
                  <h3 className="font-bold text-1xl my-1">{project.name}</h3>
                  <p className="text-gray-600 text-md truncate">
                    {project.name}
                  </p>
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
