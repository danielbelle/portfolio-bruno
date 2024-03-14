import React from "react";
import { useParams } from "react-router-dom";
import datas from "../data/data";

const Test = () => {
  const href = useParams();
  let project;
  datas.map((data) => (data.ref === href.ref ? (project = data) : ""));

  return (
    <div className="justify-between items-center max-w-[1000px] m-auto relative pt-[30px] w-full pb-10 bg-white px-5 lg:px-0">
      <div className="overflow-hidden drop-shadow-sm">
        <h3 className="text-center font-bold text-4xl my-5">A</h3>
        <img className="h-39 w-full object-cover" src="" alt="" />
        <div className="p-8">
          <h3 className="font-bold text-2xl my-1">A</h3>
          <p className="text-gray-600 text-xl">A</p>
        </div>
        <div className="">
          <h1 className="p-5 items-center justify-center text-center text-2xl">
            Company: Tubanharon Process Engineering
          </h1>

          <div>
            <h1 className="text-xl">Technologies:</h1>
            <ul className="list-item list-disc pl-10 my-5">
              <li>Python</li>
              <li>Django</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

          <div className="mb-5">
            <p className="mt-2">
              OxyFree was a prototype of a process simulator I developed for a
              client in the steel industry.
            </p>
            <p className="mt-2">
              This was my first (and the company's) contact with
              web-development, so it required a lot of self-learning and being
              able to look for solutions on my own.
            </p>
            <p className="mt-2 font-bold">It was really fun!</p>
          </div>
          <div className="flex justify-center items-center pt-7">
            <figure className="pb-5">
              <img
                className=""
                src="http://bkiyoshi.in/wp-content/uploads/2022/10/oxyfree-main.jpg"
                alt=""
              />
              <figcaption className="text-center text-sm mb-5">
                Main page
              </figcaption>
            </figure>
          </div>

          <div className="flex justify-center items-center pt-7">
            <figure className="pb-5">
              <img
                className=""
                src="http://bkiyoshi.in/wp-content/uploads/2022/10/oxyfree-params.jpg"
                alt=""
              />
              <figcaption className="text-center text-sm mb-5">
                Simulation parameters page
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
