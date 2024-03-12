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
            Company: SINMEC (UFSC)
          </h1>

          <div>
            <h1 className="text-xl">Technologies:</h1>
            <ul className="list-item list-disc pl-10 my-5">
              <li>Python;</li>
              <li>Computer vision;</li>
              <li>Arduino;</li>
              <li>LabVIEW;</li>
              <li>git;</li>
              <li>MATLAB;</li>
            </ul>
          </div>

          <div className="mb-5">
            <p className="">
              At the lab I worked in during college we had this really cool
              experimental bench with water pumps, valves, an air diffuser, flow
              meters, cameras and LASERS:
            </p>
          </div>

          <div className="flex justify-center items-center">
            <figure>
              <img
                className=""
                src="http://bkiyoshi.in/wp-content/uploads/2022/10/Screenshot-2022-10-10-205538-e1665447625713.jpg"
                alt=""
              />
              <figcaption className="text-center text-sm mb-5">
                Schematic of the experimental bench
              </figcaption>
            </figure>
          </div>
          <div className="mb-5">
            <p className="mb-5">
              My work was to automate it! So the guys teached me Python, LabVIEW
              and Arduino! And this was also my first time learning about git!
            </p>
            <p className="mb-5 font-bold">I. LOVED. IT.</p>
            <p className="mb-5">
              After the bench was automated, then the work was to help develop a
              computer vision algorithm to measure flows by image. This was done
              in MATLAB and Python, mostly using the CV-2 package.
            </p>
          </div>

          <div>
            <h5 className="text-xl mt-8 mb-3">Check some images:</h5>
            <div className="flex justify-center items-center">
              <figure className="pb-5">
                <img
                  className=""
                  src="http://bkiyoshi.in/wp-content/uploads/2022/10/Screenshot-2022-10-10-205156-e1665447679311.jpg"
                  alt=""
                />
                <figcaption className="text-center text-sm mb-5">
                  Image processing steps in bubble identification procedure
                </figcaption>
              </figure>
            </div>

            <div className="flex justify-center items-center">
              <figure className="pb-5">
                <img
                  className=""
                  src="http://bkiyoshi.in/wp-content/uploads/2022/10/Screenshot-2022-10-10-205330.jpg"
                  alt=""
                />
                <figcaption className="text-center text-sm mb-5">
                  Velocity vectors drawn over some bubbles{" "}
                </figcaption>
              </figure>
            </div>

            <div className="flex justify-center items-center"></div>
            <figure className="pb-5">
              <img
                className=""
                src="http://bkiyoshi.in/wp-content/uploads/2022/10/Screenshot-2022-10-10-205453.jpg"
                alt=""
              />
              <figcaption className="text-center text-sm mb-5">
                Velocity vectors drawn over image, but for liquid phase
              </figcaption>
            </figure>
          </div>

          <div className="">
            <p className="mt-5">
              Honestly, with the explosion of neural networks in the last few
              years, our parametric approach to image segmentation is probably
              waaay outdated. But it was an amazing experience nonetheless!
            </p>
            <p className="mb-5 mt-5">
              If you'd like more detail, you can check our article in the link
              below:
            </p>
            <a
              className="cursor-pointer text-black"
              href="https://www.sciencedirect.com/science/article/pii/S0009250918303269"
            >
              https://www.sciencedirect.com/science/article/pii/S0009250918303269
            </a>
            <p className="font-bold mt-5">
              Absolutely do NOT use{" "}
              <a
                className="cursor-pointer underline"
                href="https://www.sci-hub.se/"
              >
                sci-hub
              </a>{" "}
              to get access to it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
